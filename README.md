# SoundScout

SoundScout is a listicle web app for discovering local music events near campus.
It uses a Node + Express backend to serve static HTML pages styled with PicoCSS
and custom CSS, with no frontend framework.

## Run locally

```bash
bun install
bun run start
```

Then open `http://localhost:3000`.

## Project routes

- `/` event list page
- `/events/:slug` unique event detail pages
- any unknown path -> custom 404 page

## Feature checklist

- [x] Vanilla HTML/CSS/JS only (no React)
- [x] Displays title and themed homepage
- [x] Shows at least 5 unique list items
- [x] Shows at least 3 attributes per event card
- [x] Click-through detail pages with unique endpoints
- [x] Detail pages include all event fields
- [x] Custom 404 page
- [x] Styled with PicoCSS
- [x] Stretch: unique card format + animations + badges/chips
