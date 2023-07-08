import pg from "pg";

//using the credentials from .env file
//host db with Render
const pool = new pg.Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}
