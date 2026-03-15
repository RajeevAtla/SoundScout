import "dotenv/config";
import pg from "pg";
import { events } from "../src/data/events.js";

const { Pool } = pg;

const pool = new Pool({
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT ?? 5432),
  ssl: {
    rejectUnauthorized: false
  },
  user: process.env.PGUSER
});

const insertSql = `
  INSERT INTO events (
    slug,
    event_name,
    artists,
    date_time,
    venue,
    genre,
    ticket_price,
    image,
    description,
    age_requirement,
    campus_distance
  )
  VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
  )
  ON CONFLICT (slug) DO UPDATE SET
    event_name = EXCLUDED.event_name,
    artists = EXCLUDED.artists,
    date_time = EXCLUDED.date_time,
    venue = EXCLUDED.venue,
    genre = EXCLUDED.genre,
    ticket_price = EXCLUDED.ticket_price,
    image = EXCLUDED.image,
    description = EXCLUDED.description,
    age_requirement = EXCLUDED.age_requirement,
    campus_distance = EXCLUDED.campus_distance,
    updated_at = NOW();
`;

async function main() {
  for (const event of events) {
    await pool.query(insertSql, [
      event.slug,
      event.eventName,
      event.artists,
      event.dateTime,
      event.venue,
      event.genre,
      event.ticketPrice,
      event.image,
      event.description,
      event.ageRequirement,
      event.campusDistance
    ]);
  }

  console.log(`Seeded ${events.length} events.`);
}

main()
  .catch((error) => {
    console.error("Failed to seed events.");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
