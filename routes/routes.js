import express from "express";
const router = express.Router();

import {getData} from "../models/models.js" 

//GET REQUEST AlL USER
router.get("/", async function (req, res) {
    const allData = await getData();
    let responseObj = {
        sucess: true,
        data: allData
    }
    res.json(responseObj);
    console.log (responseObj);

});

export default router;

