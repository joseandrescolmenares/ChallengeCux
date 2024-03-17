require('dotenv').config();
const express = require("express");
const routerChatActivity = express.Router();
const activityController = require("../app/controllers/chatController")

routerChatActivity.post("/", activityController.chatActivity);

module.exports = routerChatActivity;
