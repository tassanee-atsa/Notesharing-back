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
    


router.put("/date/:keyword", function(req, res) {
    const searchDate = req.params.keyword;
    const body = req.body;
    let updateData = await updateByDate(keyword)
    getanote[updateData] = body;
    const responseObject = { success: true, message: 'Your note has been updated' , data: getanote };
    res.json(responseObject);
      })  

export default router;

