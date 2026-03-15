import { pool } from "./db.js";

function normalizeEventRow(row) {
  return {
    ageRequirement: row.age_requirement,
    artists: row.artists,
    campusDistance: row.campus_distance,
    dateTime: row.date_time,
    description: row.description,
    eventName: row.event_name,
    genre: row.genre,
    image: row.image,
    slug: row.slug,
    ticketPrice: row.ticket_price,
    venue: row.venue
  };
}

export async function getAllEvents() {
  const result = await pool.query(`
    SELECT
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
    FROM events
    ORDER BY id ASC
  `);

  return result.rows.map(normalizeEventRow);
}

export async function getEventBySlug(slug) {
  const result = await pool.query(
    `
      SELECT
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
      FROM events
      WHERE slug = $1
      LIMIT 1
    `,
    [slug]
  );

  if (result.rowCount === 0) {
    return null;
  }

  return normalizeEventRow(result.rows[0]);
}
