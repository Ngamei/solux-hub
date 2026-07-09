# Architectural Decisions — Solux Doc Hub

Implementation/architecture decisions for this site. Business and state decisions live in the root [../../DECISIONS.md](../../DECISIONS.md) (do not duplicate).

## Use plain HTML for all documents
- Date: (backfill)
- Context: needed fast-to-ship, low-overhead business docs.
- Options: HTML vs a static-site generator vs a framework.
- Decision: hand-authored HTML, no framework.
- Consequences: zero build framework; consistency enforced by convention (`Style_Guide.html`) rather than components.

## Deploy on Vercel with cleanUrls and a root redirect
- Decision: Vercel, `cleanUrls: true`, `/` -> `/Solux`.
- Consequences: pretty URLs (`/Solux`); landing is always the hub.

## Inject Hypothesis via build command rather than editing each file
- Decision: `buildCommand` runs `inject-hypothesis.js` on every deploy.
- Consequences: annotation layer is guaranteed present even on regenerated docs; the script must stay idempotent (it checks for `hypothes.is/embed.js` before injecting).

## Preserve the P01/P02/P03 phase structure
- Decision: phase architecture is fixed; changes require explicit request.
- Consequences: docs and navigation assume this structure (Tender folded into P01; Study Lab is P02 with two phases; Product Hub is P05).
