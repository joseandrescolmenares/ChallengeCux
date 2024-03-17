const chat = require("../../ai/chat");

module.exports = {
  chatActivity: async (message) => {
    return await chat(message);
  },
};
