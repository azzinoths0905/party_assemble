# AGENTS.md

This file provides repo-specific guidance for coding agents and contributors working in `party_assemble`.

## Repository Purpose

- This is a WeChat Mini Program project.
- The product goal is to help multiple people find the most convenient meetup place.
- The screenshots in `original-design/` are the current source of truth for the target UI and user flow.

## Current State

- The repository now contains a native WeChat Mini Program scaffold.
- Keep new implementation work aligned with the native Mini Program structure already present in `app.js`, `app.json`, `pages/`, and `project.config.json` unless the user explicitly asks for a framework migration.
- The current app uses local mock data only. Do not imply that participant sync, invitations, or place search are real until those capabilities are implemented.

## Product Priorities

When implementing features, prioritize the following user journey:

1. Start a meetup.
2. Set or confirm the organizer's location.
3. Invite participants or add their locations manually.
4. Recommend a convenient meetup place for the group.
5. Preserve finished meetups in history.

## Design References

Treat these files as the baseline UI reference:

- `original-design/homepage.png`
- `original-design/invite.png`
- `original-design/address-picker.png`
- `original-design/history.png`

If product or implementation decisions conflict with the screenshots, call that out explicitly instead of silently diverging.

## Working Guidelines

- Inspect the repo before scaffolding or restructuring; this project currently has very little code.
- Prefer small, reversible changes over broad speculative setup.
- Keep naming aligned with the meetup domain: meetup, participant, location, recommendation, history.
- Do not add fake setup instructions or placeholder commands that are not backed by actual files in the repo.
- Reuse the built-in Mini Program primitives first. If you introduce a third-party UI kit, map SDK, or framework, document why.
- Update `README.md` whenever implementation changes make the current project status or setup instructions outdated.
- Use `npm run smoke:miniprogram` when validating the current page flow in WeChat Developer Tools. It is the repo's current automated UI check.

## Documentation Expectations

- Keep the README focused on what the app does, what exists in the repo today, and how to move forward from the current state.
- If new pages or flows are added, document how they relate to the original design references.
- If a map provider, backend, or invitation mechanism is introduced, record that decision clearly in the README or architecture docs.
