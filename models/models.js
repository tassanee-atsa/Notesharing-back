import {query} from "../db/index.js"

export async function getData(){
    const res = await query('SELECT * FROM getanote')
    console.log(res.rows);
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
 
export async function updateByDate(date,newTopics,newNotes){
    const res = await query('UPDATE getanote SET topics = ${newTopics} AND notes = ${newNotes}  WHERE date = ${date};')
    console.log(res.rows)
    return res.rows
}
 