const activityService = require("../services/chatServices");

module.exports = {
  chatActivity: async (req, res) => {
    const chatResponse = activityService.chatActivity(req.body);
    console.log(chatResponse, "chat");
    res.json(await chatResponse);
  },
};
