# Project Overview — Solux Doc Hub

## What it is
A static HTML documentation hub centralising Solux's business process documentation: CRM/ERP assessment, tender/procurement workflows, Study Lab, stakeholder information, and AI initiatives. Deployed on Vercel with a Hypothesis annotation layer for collaborative review.

## What it is NOT
The Solux product/application. That is a separate codebase at github.com/mzouaisolux/solux (aka "Solux_byMehdi" / SBM), deployed at solux-hub-seven.vercel.app. This hub documents and analyses the business and, where relevant, references that app — but contains no app code.

## Audience
Solux stakeholders reviewing business analysis and process docs, with collaborative annotation via Hypothesis.

## Phase model
The AI initiatives are organised under phase tags (see `Solux.html` and `Solux_AI_Initiatives.html`):
- **P01 — Lead Intelligence** (public-tender monitoring merged in as a sub-channel; formerly the separate P04 Tender tool).
- **P02 — Study Lab** (Lighting + Energy), with two internal phases: Phase 1 Lighting Design (active) and Phase 2 Energy Automation (future; formerly the separate P03).
- **P05 — Product Knowledge Hub**.

Preserve this phase structure; changes require an explicit request. The meta files (`CLAUDE.md`, `.cursor/rules/project.mdc`) refer to it as "P01/P02/P03" — that is the same phase architecture, before Tender (P04) folded into P01 and old P03 became P02's Phase 2.
