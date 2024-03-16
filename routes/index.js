require('dotenv').config();
const express = require("express");
const router = express.Router();
const activityController = require("../app/controllers/activityController");

router.get("/", (req, res) => {
  res.send("index");
});



router.get("/activitys", activityController.getActivity);

module.exports = router;
