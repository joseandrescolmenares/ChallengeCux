const chatactivity = require("../../utils/chatActivity");
const chat = require("../../ai/chat");

module.exports = {
  getActivity: () => {
    return chatactivity;
  },
  chatActivity: () => {
    return chat;
  },
};
ß;
