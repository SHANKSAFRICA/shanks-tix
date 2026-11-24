# ShanksTix Rebuild — Feature Checklist

Source: old repos `shankstix-frontend` (74 pages), `shankstix-backend` (~230 API endpoints, 41 tables), `SHANKSTIX_ADMIN` (~25 screens).
New layout: one repo `shankstix` → `apps/web` (Next.js, incl. `/admin`), `apps/api` (Express), `packages/db` (Prisma, reused schema).

Legend: **P1** launch-blocking · **P2** needed soon after · **P3** nice to have / later

---

## ⚠️ Must-keep compatibility (or live users break)

| Item | Detail |
|---|---|
| Database | Reuse existing Prisma schema as-is (41 tables, 17 migrations). Additive changes only. |
| Passwords | bcrypt hashes — new auth must verify with bcrypt. |
| Ticket QR codes | URL `https://www.shankstix.com/verify?ticketId&ticketCode&ticketName&eventId&sig`, sig = first 16 hex of HMAC-SHA256(`ticketCode:eventId`, `TICKET_SECRET`). **Carry over `TICKET_SECRET` exactly** and keep a `/verify` page on the web app. |
| Paystack webhook | Currently `POST /api/pay/webhook` (+ `/api/payments/...`). Keep path or update in Paystack dashboard on launch day. |
| Klump webhooks | `POST /api/payment/klumpWebhook`, `POST /api/campaigns/webhooks/klump/campaign`. |
| Google OAuth | Callback URLs must be updated in Google Cloud console if they change. |
| Event URLs | Public events use `/events/[id]` and API by `:slug` — keep old links working (redirects if needed). |
| Roles | `ATTENDEE, ORGANIZER, ADMIN, COHOST, FINANCE, SUPPORT` (+ gate staff via GatePass). |

---

## Phase 1 — Foundation, auth, public site (P1)

**Auth**
- [ ] Email + password signup, email verification code, resend code
- [ ] Login, logout, logout all devices
- [ ] Google sign-in (callback)
- [ ] Magic-link login
- [ ] Forgot / reset password (`/auth/reset-password/[code]`)
- [ ] Onboarding (choose attendee / organizer), referral code check
- [ ] Switch role (attendee ↔ organizer)
- [ ] Device sessions list / revoke (`/me/sessions`)
- [ ] 2FA enable/disable (TOTP)
- [ ] Staff login (gate staff), admin login

**Public pages**
- [ ] Home / landing (hero, trending, by-state, recommendations)
- [ ] Events list, search, by location (Google Maps), count-by-state
- [ ] Event detail page (tickets, map, share, save, page-visit tracking)
- [ ] About, Features, Services, Work, Support, Privacy policy
- [ ] Newsletter signup
- [ ] `/verify` ticket verification page (QR target)

## Phase 2 — Buying tickets (P1)

- [ ] Ticket selection → ticket summary → attendee info → payment
- [ ] Discount code validate/apply
- [ ] Fee calculation (platform fees / flat fee / FeeBreakdown)
- [ ] Paystack initialize + verify + webhook (idempotent, WebhookEvent inbox)
- [ ] Free tickets
- [ ] Guest checkout (no account)
- [ ] Split payment (split page, generated link, split by email)
- [ ] Part payment: pay balance, partial-payment reclaim job
- [ ] Cancel / refund order (per event refund policy)
- [ ] Order status page, success / failed pages
- [ ] Ticket issuing: ticket code, signed QR, PDF ticket, email delivery
- [ ] Ticket download
- [ ] Payment reconcile job (catches missed webhooks)
- [ ] Low-stock alerts to organizer

## Phase 3 — Organizer core (P1)

- [ ] Organizer dashboard stats + analytics + activity feed
- [ ] Create event (multi-step), drafts (save/edit/list), publish
- [ ] Event types: physical / virtual (Zoom) / visibility (public/private), categories
- [ ] Edit / delete event
- [ ] Ticket types CRUD (price, quantity, sales window)
- [ ] Discount codes CRUD
- [ ] Attendees list per event + export (CSV/PDF)
- [ ] Organizer NIN verification + status
- [ ] Settings: profile, security, notifications, preferences, billing (bank account), hosts

## Phase 4 — Gate / check-in (P1)

- [ ] Gate staff invite (gate pass), list, update, delete
- [ ] Gate staff login + profile (`/gate-pass`)
- [ ] QR scanner (camera, jsQR) — validates **old and new** tickets
- [ ] Organizer self-scan per event
- [ ] Check-in + scan logs (TicketCheckIn, TicketScanLog)

## Phase 5 — Attendee area + money (P1/P2)

- [ ] Attendee dashboard: upcoming / attended events, event detail with ticket QR
- [ ] Saved events
- [ ] Attendee settings: NIN, preferences, security
- [ ] Wallet: balance, transactions
- [ ] Organizer finance overview, transaction history, details, receipt PDF, export PDF
- [ ] Withdrawal request → email/SMS code confirm → withdrawal records
- [ ] Disputes: create, list
- [ ] Event reminders job, event status job (auto-end events)

## Phase 6 — Admin (`/admin`) (P2)

- [ ] Admin login (+ action OTP for sensitive actions)
- [ ] Dashboard: revenue total, platform revenue, trend, popular states, recent events
- [ ] Organizers: list, stats, detail, verification, NIN review, events summary (+PDF)
- [ ] Attendees: list, stats, detail, their events (+PDF)
- [ ] Events: list, approve/reject/status, detail, overview, ticket sales, create event
- [ ] Users: suspend, edit, role change, balance view + adjust (with OTP)
- [ ] Finance: details (+PDF), wallets, payouts (pending / approve), withdrawals
- [ ] Disputes
- [ ] Compliance (NIN counts verified/pending)
- [ ] Newsletter emails (+PDF)
- [ ] Surveys / feedback
- [ ] Staff & roles (FINANCE, SUPPORT), admin profile
- [ ] Settings: service fees (platform fees), payment providers, integrations, security
- [ ] Global search, activity stream

## Phase 7 — Extras (P3)

- [ ] Marketing campaigns (email/SMS): rates, estimate, create, pay (wallet / Klump), recipients, delivery status
- [ ] Campaign rates admin
- [ ] Klump (buy now pay later) for tickets
- [ ] Co-hosts: invite, accept (`/co-host/accept/[token]`), roles, update, remove
- [ ] Virtual events: Zoom join links, join session tokens, join logs
- [ ] Event share tracking, recommendations
- [ ] Ambassador page (admin)
- [ ] Survey / feedback form
- [ ] Notification preferences (email/SMS/push via Firebase)

## Phase 8 — Launch

- [ ] Final `pg_dump` of VPS DB → restore into Neon (production branch)
- [ ] Copy secrets: `TICKET_SECRET`, Paystack, Klump, Resend, Twilio/Infobip, Cloudinary, Google, Zoom, Firebase, Sentry, JWT
- [ ] Update webhook URLs (Paystack, Klump) + Google OAuth callbacks
- [ ] Wipe VPS → deploy `apps/web` + `apps/api` + Redis + nginx + SSL
- [ ] Smoke test: login with old account, buy ticket, scan an OLD ticket, wallet balance, admin login
- [ ] DNS cutover

---

## External services in use
Paystack · Klump · Resend + Nodemailer (email) · Twilio + Infobip (SMS) · Cloudinary (images) · Google Maps + Google OAuth · Zoom · Firebase (push) · Sentry · NIN verification API · Redis (cache, rate limit, BullMQ) · pg-boss (Postgres job queue)
