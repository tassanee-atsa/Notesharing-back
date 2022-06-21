import {query} from "../db/index.js"

export async function getData(){
    const res = await query('SELECT * FROM getanote')
    console.log(res.rows);
    
    return res.rows;
    
    }

    export async function getByDate(){
        const res = await query('SELECT * FROM getanote WHERE date = "20/06/2022" ')
        console.log(res.rows);
        
        return res.rows;
        
        }


 export async function getByTopic(){
        const res = await query('SELECT * FROM getanote WHERE topic LIKE  %Jest% ')
        console.log(res.rows);
            
        return res.rows;
            
            }