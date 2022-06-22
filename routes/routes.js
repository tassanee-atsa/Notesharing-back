import express from "express";
const router = express.Router();

import {getData,
        getByTopic,
        getByDate, 
        updateByDate
} from "../models/models.js" 

//GET REQUEST ALL DATA
router.get("/", async function (req, res) {
    const allData = await getData();
    let responseObj = {
        sucess: true,
        data: allData
    }
    res.json(responseObj);
    console.log (responseObj);

});

router.get("/topics/:keyword", async function(req, res){
let keyword = req.params.keyword;
let dataByTopic = await getByTopic(keyword);
res.json({success : true, payload: dataByTopic});
});

router.get("/date/:keyword", async function(req, res){
    let keyword = req.params.keyword;
    let dataByDate = await getByDate(keyword);
    res.json({success : true, payload: dataByDate});
    });
    

router.put("/date/:keyword", async function(req, res) {
    //const updateData = req.params.keyword;
    const body = req.body;
    let date = body.date;
    let topics = body.topics;
    let notes = body.notes;
    let updateNote = await updateByDate(date,topics,notes)
    //updateNote[updateByDate] = body;
    const responseObject = { success: true, message: 'Your note has been updated' , data: updateNote };
    res.json(responseObject);
      })  

export default router;
