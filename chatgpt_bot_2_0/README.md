# ChatGPT Bot 2.0

A responsive front-end recreation of the supplied dark, mono/terminal-style dashboard.

## What is included

- ChatGPT Bot 2.0 branding
- 12-segment radial planning/check visualization
- Monthly revenue curve
- Four headline metrics
- Six workflow cards
- Root → Offer → Surface → Hunt → Clock workflow
- Interactive planner button
- Stage tabs
- Mobile responsive layout
- An ALPINE-inspired graph-state object in `app.js`

## Run

No build system is required.

1. Extract the ZIP.
2. Open `index.html` in a browser.

For a local server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Important

This is a UI prototype, not a live trading system and it does not execute trades, access brokerage accounts, or claim real revenue. Replace the demo metrics with verified market/account data through a backend before using it for financial operations.

## Suggested production architecture

Frontend:
- React + TypeScript
- SVG/Canvas visualization
- WebSocket market stream

Backend:
- Node/NestJS
- PostgreSQL
- Redis
- Auth/RBAC
- Audit log

Planning engine:
- Graph/state representation
- Candidate generation
- Constraint checking
- Path validation
- Backtracking/replanning
- Tool/API execution layer

Trading safety:
- paper-trading mode first
- explicit risk limits
- max position/notional
- max daily loss
- slippage limits
- kill switch
- idempotent order handling
- exchange/broker reconciliation
