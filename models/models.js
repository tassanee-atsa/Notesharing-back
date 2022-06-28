import { query } from "../db/index.js";

//get all the data from the database
export async function getData() {
  const res = await query("SELECT * FROM getanote");
  //console.log(res.rows);
  return res.rows;
}

//filters the database(request above) table by topic
export async function getByTopic(topic) {
  const allData = await getData();
  return allData.filter((note) => note.topics.includes(topic));
}

//filters the database table by date
export async function getByDate(date) {
  const allData = await getData();
  return allData.filter((note) => note.date.includes(date));
}

//updates the database after topic and/or notes have been changed
export async function updateByDate(date, topics, notes) {
  //console.log(date,topics,notes);
  const res = await query(
    `UPDATE getanote SET topics = $1, notes = $2  WHERE date = $3 RETURNING *;`,
    [topics, notes, date]
  );
  //console.log(res.rows)
  return res.rows;
}

//add the notes to the database
export async function createNote(date, topics, notes) {
  const res = await query(
    `INSERT INTO getanote (topics, notes, date) VALUES ($1, $2, $3) RETURNING *;`,
    [topics, notes, date]
  );
  //console.log(res);
  return res;
}
