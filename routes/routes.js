import express from "express";
const router = express.Router();

import {getData,
        getByDate,
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

/*
//GET BY DATE
router.get("/" , async function (req, res){
    const data = await getByDate();
    let responceObj = {
        sucess: true,
        data: data
    }
})

router.get("/:topics" , async function (req, res){
    const data = await getByTopic(req.query.topics);
    let responceObj = {
        sucess: true,
        data: data
    }
})
*/
export default router;

