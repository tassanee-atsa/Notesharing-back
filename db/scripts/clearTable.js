import { query } from "../index.js";

async function clearTable() {
  //for clearing the entry on the table
  await query(`DROP TABLE getanote`);
}

clearTable();
