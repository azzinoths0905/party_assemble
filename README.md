# party_assemble

`party_assemble` is a native WeChat Mini Program for finding the most convenient meetup place for multiple people.

The repository now contains an initial runnable scaffold with four pages, local mock data, and the existing design references under `original-design/`.

## Goal

Help a group decide where to meet with as little coordination friction as possible.

Typical use cases:

- A host starts a meetup from their current location.
- Friends join by sharing or manually adding their own locations.
- The app recommends a convenient meeting area or destination for the full group.
- Users can review past meetup sessions.

## Design References

The target experience is defined by the screenshots in [`original-design/`](./original-design):

- [`homepage.png`](./original-design/homepage.png): start a new meetup from the current location
- [`invite.png`](./original-design/invite.png): manage participants and invite more friends
- [`address-picker.png`](./original-design/address-picker.png): search and select a location manually
- [`history.png`](./original-design/history.png): browse previous meetup sessions

## Expected Product Flow

1. Open the Mini Program on the home page and start a new meetup from the organizer's current location or a manually chosen address.
2. Invite friends to join the meetup, or add their locations manually.
3. Compute and display a recommended meetup place for the group.
4. Save the meetup so it can be reviewed later in history.

## Current Scaffold

The current Mini Program includes these initial pages:

- `pages/home/index`: organizer home page with current location and recommended meetup point
- `pages/invite/index`: participant management and meetup summary page
- `pages/address-picker/index`: local mock address search and selection flow
- `pages/history/index`: meetup history list

The current implementation intentionally uses local mock data only:

- no backend
- no invitation service
- no real-time participant sync
- no map SDK beyond the built-in Mini Program `map` component
- no device geolocation or place-search API yet

## MVP Scope

The first implementation should focus on the shortest path to a usable product:

- organizer location capture
- participant invitation and join flow
- manual address search and selection
- meetup-point recommendation for multiple people
- meetup history

## Development

Open the repo directly in WeChat Developer Tools using the existing [`project.config.json`](./project.config.json).

For the DevTools-backed smoke run added in this scaffold:

1. Run `npm install`
2. Run `npm run smoke:miniprogram`

The smoke script uses `miniprogram-automator`, launches WeChat Developer Tools, drives the core flow, and writes screenshots to `artifacts/miniprogram-smoke/`.

Relevant root files:

- `app.js`
- `app.json`
- `app.wxss`
- `package.json`
- `sitemap.json`
- `project.config.json`
- `project.private.config.json`

## Current Repository Contents

```text
.
├── app.js
├── app.json
├── app.wxss
├── README.md
├── AGENTS.md
├── pages/
│   ├── address-picker/
│   ├── history/
│   ├── home/
│   └── invite/
└── original-design/
    ├── address-picker.png
    ├── history.png
    ├── homepage.png
    └── invite.png
```

## Notes

- The current pages are a first-pass scaffold meant to make the user flow visible inside WeChat Developer Tools.
- The UI is intentionally close to the design references, but some details are simplified because the project does not yet include image assets, a backend, or a live location/search integration.
