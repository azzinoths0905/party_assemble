# party_assemble

`party_assemble` is a WeChat Mini Program for finding the most convenient meetup place for multiple people.

The current repository is at the planning and design-reference stage. The `original-design/` folder contains the target UI screens that should guide future implementation.

## Goal

Help a group decide where to meet with as little coordination friction as possible.

Typical use cases:

- A host starts a meetup from their current location.
- Friends join by sharing or manually adding their own locations.
- The app recommends a convenient meeting area or destination for the full group.
- Users can review past meetup sessions.

## Design References

The target experience is defined by the screenshots in [`original-design/`](./original-design):

- [`landing.png`](./original-design/landing.png): intro / value proposition screen
- [`homepage.png`](./original-design/homepage.png): start a new meetup from the current location
- [`invite.png`](./original-design/invite.png): manage participants and invite more friends
- [`address-picker.png`](./original-design/address-picker.png): search and select a location manually
- [`history.png`](./original-design/history.png): browse previous meetup sessions

## Expected Product Flow

1. Open the Mini Program and understand the core promise: find a fair meetup point across multiple starting locations.
2. Start a new meetup using the organizer's current location or a manually chosen address.
3. Invite friends to join the meetup, or add their locations manually.
4. Compute and display a recommended meetup place for the group.
5. Save the meetup so it can be reviewed later in history.

## MVP Scope

The first implementation should focus on the shortest path to a usable product:

- organizer location capture
- participant invitation and join flow
- manual address search and selection
- meetup-point recommendation for multiple people
- meetup history

## Current Repository Contents

```text
.
├── README.md
├── AGENTS.md
└── original-design/
    ├── address-picker.png
    ├── history.png
    ├── homepage.png
    ├── invite.png
    └── landing.png
```

## Notes

- This repo does not yet contain a Mini Program scaffold, dependency manifest, or implementation code.
- Future setup and development instructions should be added only after the actual project structure exists.
