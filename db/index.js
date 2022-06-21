import pg from "pg"
import 'dotenv/config';

export const pool = new pg.Pool({
    user: process.env.PGUSER,
    host:  process.env.PGHOST,
    database:  process.env.PGDATABASE,
    password:  process.env.PGPASSWORD,
    port:  process.env.PGPORT,
    ssl: {rejectUnauthorized: false}
})


const results = await pool.query(`SELECT * FROM getanote;`)
console.log(results)