/* global getApp */
const fs = require('fs');
const path = require('path');
const automator = require('miniprogram-automator');

const CLI_PATH = '/Applications/wechatwebdevtools.app/Contents/MacOS/cli';
const PROJECT_PATH = path.resolve(__dirname, '..');
const SCREENSHOT_DIR = path.join(PROJECT_PATH, 'artifacts', 'miniprogram-smoke');
const SHORT_WAIT = 600;
const MEDIUM_WAIT = 1000;
const LONG_WAIT = 1200;
const MAP_WAIT = 5000;
const TRANSITION_WAIT = 1500;

function addManualParticipantInMiniProgram(location) {
  getApp().addManualParticipant(location);
}

function finishMeetupInMiniProgram() {
  getApp().finishCurrentMeetup();
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function capture(miniProgram, name) {
  const targetPath = path.join(SCREENSHOT_DIR, `${name}.png`);
  await miniProgram.screenshot({ path: targetPath });
  return targetPath;
}

async function tapRequired(page, selector) {
  const element = await page.$(selector);

  if (!element) {
    throw new Error(`Element not found for selector: ${selector}`);
  }

  await element.tap();
}

async function inputRequired(page, selector, value) {
  const element = await page.$(selector);

  if (!element) {
    throw new Error(`Element not found for selector: ${selector}`);
  }

  await element.input(value);
}

async function main() {
  ensureDir(SCREENSHOT_DIR);

  const miniProgram = await automator.launch({
    cliPath: CLI_PATH,
    projectPath: PROJECT_PATH,
  });

  try {
    let page = await miniProgram.reLaunch('/pages/home/index');
    await page.waitFor(MAP_WAIT);
    await capture(miniProgram, 'home');

    page = await miniProgram.navigateTo('/pages/invite/index');
    await page.waitFor(LONG_WAIT);
    await capture(miniProgram, 'invite');

    page = await miniProgram.navigateTo('/pages/address-picker/index?target=participant');
    await page.waitFor(MEDIUM_WAIT);
    await capture(miniProgram, 'address-picker');

    await inputRequired(page, '.address-picker-page__input', '万象');
    await page.waitFor(SHORT_WAIT);
    await tapRequired(page, '.address-picker-page__result');

    const selectedLocation = await page.data('results[0]');
    await miniProgram.evaluate(addManualParticipantInMiniProgram, selectedLocation);
    await miniProgram.navigateBack();
    await sleep(TRANSITION_WAIT);
    page = await miniProgram.currentPage();
    await page.waitFor(LONG_WAIT);
    await capture(miniProgram, 'invite-after-add');

    await miniProgram.evaluate(finishMeetupInMiniProgram);
    page = await miniProgram.redirectTo('/pages/history/index');
    await page.waitFor(LONG_WAIT);
    await capture(miniProgram, 'history');

    console.log(JSON.stringify({
      status: 'ok',
      screenshotDir: SCREENSHOT_DIR,
    }));
  } finally {
    await miniProgram.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
