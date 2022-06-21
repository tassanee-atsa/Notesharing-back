import {query} from "../index.js"


async function clearTable(){

        const res = await query (
            `DELETE FROM getanote`, 
        );
 
    }


clearTable ();
