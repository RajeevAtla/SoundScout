import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT ?? 5432),
  ssl: {
    rejectUnauthorized: false
  },
  user: process.env.PGUSER
});

export async function verifyDatabaseConnection() {
  await pool.query("SELECT 1");
}
