const chat = require("../../ai/chat");

module.exports = {
  chatActivity: async (body) => {
    return await chat(body);
  },
};
