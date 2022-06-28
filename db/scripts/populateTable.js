import { query } from "../index.js";
import { getData } from "../../libs/libs.js";

async function populateTable() {
  for (let i = 0; i < getData.length; i++) {
    const res = await query(
      `INSERT INTO getanote (date, topics, notes) VALUES ($1, $2, $3) RETURNING *;`,
      [getData[i].date, getData[i].topics, getData[i].notes]
    );
    console.log(res.rows[0], "inserted");
  }
}

populateTable();
