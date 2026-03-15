CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  event_name TEXT NOT NULL,
  artists TEXT NOT NULL,
  date_time TEXT NOT NULL,
  venue TEXT NOT NULL,
  genre TEXT NOT NULL,
  ticket_price TEXT NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  age_requirement TEXT NOT NULL,
  campus_distance TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
