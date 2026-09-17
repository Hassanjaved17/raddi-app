# Raddi — Doorstep Scrap Pickup, Fair Price

A SMIT Batch 18 capstone project. Raddi is a doorstep scrap/recyclable pickup
product for Pakistan: transparent, fixed pricing shown upfront, scheduled
pickup slots, and payment on the spot — solving the trust and price-transparency
problem of the traditional raddi wala / kabaria system.

This repo is the frontend demo: a live, interactive landing page with a working
mock booking flow (category selection, weight estimate, slot picker, and a
confirmation state). No backend yet — this is intentionally scoped as the
demo-ready UI layer for the presentation.

## Why this niche

Doorstep scrap pickup apps exist and work at scale in India (Kabaada,
ScrapUncle, TheKabadiwala) — the model is proven. No equivalent platform is
established in Pakistan yet. The pitch isn't "a new idea," it's proven demand,
unclaimed market, and local execution.

## Why people switch

The current alternative is entirely informal: shouting for a passing kabaria,
trusting their scale reading, and accepting whatever price they offer that
day. Raddi replaces that with a fixed, visible rate, a scheduled pickup
window, and a transparent weigh-in — almost any structure beats none.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (hero entrance animation)
- react-hot-toast (booking confirmation)
- react-icons

## Project structure

```
src/
  components/    UI sections (Navbar, Hero, Comparison, HowItWorks, Pricing, BookingForm, Footer)
  data/          Mock content — scrap categories, rates, pickup time slots
  App.jsx        Assembles the page
  main.jsx       React entry point
  index.css      Design tokens (color, type) + Tailwind import
```

Kept flat and content-driven on purpose: swapping `src/data/categories.js`
for a real API call is the only change needed to go from demo to real data —
no component rewrites.

## Run locally

```bash
npm install
npm run dev
```

## Deploy (Vercel)

```bash
npm install -g vercel   # if not already installed
vercel
```

Or connect the GitHub repo directly in the Vercel dashboard — framework
preset "Vite" is auto-detected.

## Roadmap (post-capstone)

- Real backend: business/collector accounts, live order status, MongoDB + Express
- WhatsApp-based pickup confirmations and reminders
- Collector-side app for route assignment and digital receipts
- JazzCash/EasyPaisa payout integration
- City-by-city rate cards beyond Karachi/Lahore
