# 💪 FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of twelve lifts, drill into detailed instructions and stats for each one, lock lifts into a daily plan capped at five, bookmark others for later, and track today's exercise/minute/calorie totals as you go — all persisted locally so a page refresh never loses your progress.

## Live Demo
- **Live Link:** _add your deployed URL here_
- **GitHub Repository:** _add your repo URL here_

## Tech Stack
- **Next.js** (App Router) — routing, server-side data fetching, dynamic workout detail pages
- **TypeScript** — typed API layer and component props throughout
- **Tailwind CSS v4** — all styling, fully responsive from mobile to desktop
- **React Context API** — global plan/saved state shared across the navbar badges, the plan page, and every workout detail page
- **lucide-react** — icon set used across buttons, stats, and toasts
- **localStorage** — persists today's plan and saved workouts across page reloads

## Key Features
1. **Live workout library** — all twelve lifts are fetched from a live API and rendered as a responsive 3-column (desktop) grid of cards, each showing category tags, equipment, and duration/calorie/rating stats.
2. **Detailed workout pages** — every lift has its own page with a full spec panel (equipment, difficulty, sets, reps, duration, calories, rating) and numbered step-by-step instructions.
3. **Daily plan with a 5-lift cap** — add any workout to today's plan directly from its detail page; once five are locked in, the button disables itself instead of silently failing.
4. **Live-updating dashboard** — the My Plan page shows exercise count, total minutes, and total calories that update instantly as lifts are added, removed, or marked done, plus a sort-by-duration/calories/rating control.
5. **Save for later** — bookmark any lift into a separate Saved tab independent of the daily plan, with its own live counter in the navbar.
6. **Toast notifications everywhere** — every add/remove/save/done action gets an immediate on-screen confirmation.
7. **Persistent state, zero backend writes** — today's plan and saved list survive a full page reload via localStorage, with no server round-trip needed.
8. **Full responsive + error handling** — mobile/tablet/desktop layouts throughout, plus a custom 404 page and loading states while data is fetched.

## Project Structure
```
src/
├── app/            # Routes: home, workout/[id], my-plan, 404, loading states
├── components/     # UI organized by feature: layout, home, workout-detail, my-plan, ui
├── context/        # PlanContext — today's plan + saved state, localStorage-backed
├── hooks/          # useToast — toast notification system
└── lib/            # types.ts + api.ts — typed API client for the FitLog data endpoint
```

## Getting Started
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).