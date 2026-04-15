# AGENTS.md

This file provides repo-specific guidance for coding agents and contributors working in `party_assemble`.

## Repository Purpose

- This is a WeChat Mini Program project.
- The product goal is to help multiple people find the most convenient meetup place.
- The screenshots in `original-design/` are the current source of truth for the target UI and user flow.

## Current State

- The repository is currently design-first and has not been scaffolded yet.
- Do not assume a specific Mini Program framework, state library, package manager, or map SDK until those files exist in the repo.
- When adding tooling or dependencies later, document the real choices in `README.md`.

## Product Priorities

When implementing features, prioritize the following user journey:

1. Start a meetup.
2. Set or confirm the organizer's location.
3. Invite participants or add their locations manually.
4. Recommend a convenient meetup place for the group.
5. Preserve finished meetups in history.

## Design References

Treat these files as the baseline UI reference:

- `original-design/landing.png`
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
- Update `README.md` whenever implementation changes make the current project status or setup instructions outdated.

## Documentation Expectations

- Keep the README focused on what the app does, what exists in the repo today, and how to move forward from the current state.
- If new pages or flows are added, document how they relate to the original design references.
- If a map provider, backend, or invitation mechanism is introduced, record that decision clearly in the README or architecture docs.
