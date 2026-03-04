const genreClassMap = {
  Synthwave: "chip-synthwave",
  House: "chip-house",
  Acoustic: "chip-acoustic",
  EDM: "chip-edm",
  Jazz: "chip-jazz",
  "Indie Rock": "chip-indie",
  World: "chip-world",
  "Hip-Hop": "chip-hiphop"
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function pageLayout({ title, body }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    ${body}
  </body>
</html>`;
}

function renderEventCard(event, index) {
  const chipClass = genreClassMap[event.genre] ?? "chip-default";
  return `<article class="event-card reveal-card" style="--delay:${index * 90}ms">
  <a class="event-image-link" href="/events/${escapeHtml(event.slug)}" aria-label="Open details for ${escapeHtml(event.eventName)}">
    <img src="${escapeHtml(event.image)}" alt="${escapeHtml(event.eventName)} live event photo" loading="lazy" />
  </a>
  <div class="event-content">
    <header class="event-header">
      <span class="genre-chip ${chipClass}">${escapeHtml(event.genre)}</span>
      <span class="price-badge">${escapeHtml(event.ticketPrice)}</span>
    </header>
    <h2><a href="/events/${escapeHtml(event.slug)}">${escapeHtml(event.eventName)}</a></h2>
    <p class="artist-line">${escapeHtml(event.artists)}</p>
    <ul class="meta-list">
      <li>${escapeHtml(event.dateTime)}</li>
      <li>${escapeHtml(event.venue)}</li>
      <li>${escapeHtml(event.campusDistance)} from campus</li>
    </ul>
  </div>
</article>`;
}

export function renderHomePage(events) {
  return pageLayout({
    title: "SoundScout | Discover Local Music",
    body: `<main class="container app-shell">
  <section class="hero">
    <p class="eyebrow">Discover Local Music</p>
    <h1>SoundScout Event Radar</h1>
    <p class="hero-copy">Find upcoming concerts, open mics, and festival nights near campus. Browse by genre, price, and venue size, then open each event for full details.</p>
  </section>

  <section aria-label="Music events" class="event-grid">
    ${events.map((event, index) => renderEventCard(event, index)).join("\n")}
  </section>
</main>`
  });
}

export function renderDetailPage(event) {
  return pageLayout({
    title: `SoundScout | ${event.eventName}`,
    body: `<main class="container detail-shell">
  <a class="back-link" href="/">← Back to all events</a>
  <article class="detail-card">
    <img class="detail-image" src="${escapeHtml(event.image)}" alt="${escapeHtml(event.eventName)} event photo" />
    <div class="detail-content">
      <h1>${escapeHtml(event.eventName)}</h1>
      <p class="detail-description">${escapeHtml(event.description)}</p>
      <dl class="detail-grid">
        <div><dt>Artists</dt><dd>${escapeHtml(event.artists)}</dd></div>
        <div><dt>Date & Time</dt><dd>${escapeHtml(event.dateTime)}</dd></div>
        <div><dt>Venue</dt><dd>${escapeHtml(event.venue)}</dd></div>
        <div><dt>Genre</dt><dd>${escapeHtml(event.genre)}</dd></div>
        <div><dt>Ticket Price</dt><dd>${escapeHtml(event.ticketPrice)}</dd></div>
        <div><dt>Age Requirement</dt><dd>${escapeHtml(event.ageRequirement)}</dd></div>
        <div><dt>Distance from Campus</dt><dd>${escapeHtml(event.campusDistance)}</dd></div>
        <div><dt>Event Slug</dt><dd>${escapeHtml(event.slug)}</dd></div>
      </dl>
    </div>
  </article>
</main>`
  });
}

export function renderNotFoundPage() {
  return pageLayout({
    title: "SoundScout | 404",
    body: `<main class="container not-found-shell">
  <section class="not-found-card">
    <p class="error-kicker">404</p>
    <h1>That venue is off the map</h1>
    <p>The page you requested does not exist. Head back to the event radar to keep exploring.</p>
    <a href="/" role="button">Return to Events</a>
  </section>
</main>`
  });
}
