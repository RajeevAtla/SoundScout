import "dotenv/config";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const { Pool } = pg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const schemaPath = path.join(__dirname, "..", "db", "schema.sql");

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

async function main() {
  const schemaSql = await readFile(schemaPath, "utf8");
  await pool.query(schemaSql);
  console.log("Database schema applied.");
}

main()
  .catch((error) => {
    console.error("Failed to apply database schema.");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
