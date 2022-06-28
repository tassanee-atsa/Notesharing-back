import express from "express";
const router = express.Router();

import {
  getData,
  getByTopic,
  getByDate,
  updateByDate,
  createNote,
} from "../models/models.js";

//GET REQUEST ALL DATA
router.get("/", async function (req, res) {
  const allData = await getData();
  let responseObj = {
    sucess: true,
    data: allData,
  };
  res.json(responseObj);
  console.log(responseObj);
});

//GETS DATA BY TOPIC
router.get("/topics/:keyword", async function (req, res) {
  let keyword = req.params.keyword;
  let dataByTopic = await getByTopic(keyword);
  res.json({ success: true, payload: dataByTopic });
});

//GETS DATA BY DATE
router.get("/date/:keyword", async function (req, res) {
  let keyword = req.params.keyword;
  let dataByDate = await getByDate(keyword);
  res.json({ success: true, payload: dataByDate });
});

//UPDATES TOPIC AND NOTES FIELDS
router.put("/date/:keyword", async function (req, res) {
  const body = req.body;
  let date = body.date;
  let topics = body.topics;
  let notes = body.notes;
  let updateNote = await updateByDate(date, topics, notes);
  const responseObject = {
    success: true,
    message: "Your note has been updated",
    data: updateNote,
  };
  res.json(responseObject);
});

// CREATES NEW NOTE IN DATABASE
router.post("/", async function (req, res) {
  const body = req.body;
  console.log(body);
  let date = body.date;
  let topics = body.topics;
  let notes = body.notes;
  console.log(date, topics, notes);
  await createNote(date, topics, notes);
  const responseObject = {
    success: true,
    message: "Your note has been created",
  };
  res.json(responseObject);
});

export default router;
