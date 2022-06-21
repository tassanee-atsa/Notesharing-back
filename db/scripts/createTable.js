import {pool} from "../index.js"

const sqlString = `CREATE TABLE IF NOT EXISTS getanote (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, date TEXT, topics TEXT, notes TEXT);`;

async function createGetaNoteTable(){
    const res = await pool.query(sqlString);
    console.log(res)
}

createGetaNoteTable()