# ShanksTix

Event ticketing platform: rebuilt from scratch, running on the existing ShanksTix database.

## Layout

| Path | What | Dev port |
|---|---|---|
| `apps/web` | Public site + attendee, organizer and gate staff dashboards (Next.js) | 3000 |
| `apps/admin` | Admin dashboard (Next.js) | 3001 |
| `apps/api` | Backend API, payments, webhooks, jobs (Express) | 4000 |
| `packages/db` | Prisma schema + migrations (shared, matches the live database) | |
| `packages/ui` | Shared UI components | |
| `docs/FEATURES.md` | Rebuild checklist taken from the old repos | |

## Getting started

```bash
npm install
cp apps/api/.env.example apps/api/.env       # fill in values
cp packages/db/.env.example packages/db/.env  # same DATABASE_URL / DIRECT_URL
npm run dev:api
npm run dev:web
npm run dev:admin
```

## Database rules

- The schema and migrations in `packages/db/prisma` are copied unchanged from the old backend so the live database is recognised as up to date.
- Only **additive** changes. Never drop or rename columns that hold live data.
- Develop against a Neon **branch**, never the production branch.
- `TICKET_SECRET` must match the old backend, or tickets already sold stop scanning.
