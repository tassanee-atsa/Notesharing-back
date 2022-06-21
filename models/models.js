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
 
 