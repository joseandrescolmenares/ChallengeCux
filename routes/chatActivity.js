require('dotenv').config();
const express = require("express");
const routerChatActivity = express.Router();

routerChatActivity.post("/chatActivity", activityController.getActivity)

module.exports = routerChatActivity;