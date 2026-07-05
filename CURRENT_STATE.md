—# Solux Hub — Current State

Last updated: 2026-07-05

## Where We Are
- 15 commits, deployed on Vercel (15 deployments)
- Core HTML documents live: main hub, AI initiatives, business analysis, working doc, style guide
- Hypothesis annotation layer embedded
- Tender content merged into P01; Study Lab in P02+P03
- Solux_byMehdi content layered in
- **(2026-07-05)** Confirmed SBM (Solux_byMehdi) = live codebase at github.com/mzouaisolux/solux (deployed: solux-hub-seven.vercel.app). Business Analysis §4 (CRM & ERP Assessment) and Working Doc updated with an "UPDATE — 2026-07-04" callout comparing the original gap audit against the actual repo.
- **(2026-07-05)** Verified the platform has real RBAC: `user_roles` table + capability-based permission matrix (`permissions` / `role_permissions`, migration 026), server-side enforcement via `requireCapability()`, and a "View-As" simulation layer for super-admins that doesn't affect real security checks.

## What's Working
- Vercel deployment pipeline
- Document structure across business layers

## What's Not Working / Unclear
- The original §4 gap table ("Quotation: Absent", "Study Request: Absent") is now known to be stale — both are implemented in the repo (`documents`/`quotation_reminders`, `project_requests` workflow). Table left as historical record with an update note appended, not rewritten.
- Some items in the original gap table are unverified against the live repo: Reporting/Dashboards, AI/Automation, After-Sales Cases, Partner/Distributor, Tender Pipeline — these still appear absent in the code but haven't been exhaustively checked file-by-file.
- Mehdi's own `PLAN_CRM_SOLUX.md` lists next steps (linking `project_requests` to `affairs` via `affair_id`, adding a `contacts` table, prospects/tenders sandbox, notification-rules refactor) — his notes mark step 1 (affair_id) done, but the rest haven't been confirmed with him directly.

## Immediate Next Step
Confirm with Mehdi which items on his own PLAN_CRM_SOLUX.md build order are actually done vs. still planned (contacts table, planned_actions, prospects/tenders sandbox, notification_rules refactor) — don't assume from the repo snapshot alone, since it's a moving target.
