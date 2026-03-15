import "dotenv/config";
import pg from "pg";

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

async function main() {
  const tableName = process.argv[2] ?? "events";
  const allowedTables = new Set(["events"]);

  if (!allowedTables.has(tableName)) {
    throw new Error(`Unsupported table name: ${tableName}`);
  }

  const result = await pool.query(`SELECT * FROM ${tableName};`);
  console.table(result.rows);
}

main()
  .catch((error) => {
    console.error("Failed to print table contents.");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
