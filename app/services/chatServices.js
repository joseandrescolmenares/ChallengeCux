const activityModel = require("../models/chatModels");

module.exports = {
  chatActivity: async (body) => {
    const message = body.message;
    return await activityModel.chatActivity(message);
  },
};
