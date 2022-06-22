import {query} from "../db/index.js"
import router from "../routes/routes.js";

export async function getData(){
    const res = await query('SELECT * FROM getanote')
    //console.log(res.rows);
    return res.rows;
    
    }

 export async function getByTopic(topic){
     const allData = await getData();
     return allData.filter((note) => note.topics.includes(topic));

 }

 export async function getByDate(date){
    const allData = await getData();
    return allData.filter((note) => note.date.includes(date));

}
 
export async function updateByDate(date, topics, notes){
    //console.log(date,topics,notes);
    const res = await query(`UPDATE getanote SET topics = $1, notes = $2  WHERE date = $3 RETURNING *;`,[topics, notes, date])
    //console.log(res.rows)
    return res.rows
}
 