# Religious Community Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIChurchOperations`
- `AICommunityEngagement`
- `AIVolunteerScheduling`
- `AIDonationInsights`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/religious-community-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4740`

Seeded users:
- `admin@religious-community.local / admin123`
- `manager@religious-community.local / manager123`
- `analyst@religious-community.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/religious-community-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4740 npm run smoke
```
