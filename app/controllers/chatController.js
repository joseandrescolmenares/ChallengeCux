const activityService = require("../services/chatServices");

module.exports = {
  chatActivity: async (req, res) => {
    const chatResponse = activityService.chatActivity(req.body);
    res.json(await chatResponse);
  },
};
