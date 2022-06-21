import express from "express";
const router = express.Router();

import {getData,
        getByTopic
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
let topics = await getByTopic(keyword);
res.json({success : true, payload: topics});
});


export default router;

