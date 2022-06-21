import {query} from "../db/index.js"

export async function getData(){
    const res = await query('SELECT * FROM getanote')
    console.log(res.rows);
    
    return res.rows;
    
    }
