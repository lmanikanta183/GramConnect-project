# GramConnect

A multi-role farm-to-door grocery delivery platform connecting vendors, customers, and delivery agents — featuring distance-based pricing, an AI-powered chat assistant, and printable HTML invoices.

## Structure

- [`Backend/`](./Backend/README.md) — Node.js + Express REST API (auth, products, orders, AI chat via Groq, email notifications, invoice generation)
- [`Frontend/`](./Frontend/README.md) — React 19 + Vite SPA with role-based dashboards for Customer, Vendor, Delivery, and Admin

See each folder's README for full setup instructions, environment variables, and API/route details.

## Roles

| Role | Capabilities |
|---|---|
| Customer | Browse products, cart & checkout, track orders, rate deliveries |
| Vendor | Manage products, process incoming orders, assign delivery agents, view earnings |
| Delivery | View assigned deliveries, update status, track earnings |
| Admin | Approve/reject vendors & delivery agents, manage users, view platform revenue |

## Quick Start

```bash
# Backend
cd Backend
npm install
npm run dev    # http://localhost:5000

# Frontend
cd Frontend
npm install
npm run dev    # http://localhost:5173
```

Requires a MongoDB connection, a Groq API key, and Gmail SMTP credentials — see [`Backend/README.md`](./Backend/README.md) for the full `.env` setup.

> Note: the frontend's API base URL is currently hardcoded to `http://localhost:5000/api` in `src/api/index.js` — update this before deploying to production.
