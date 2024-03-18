const activityModel = require("../models/chatModels");

module.exports = {
  chatActivity: async (body) => {
  
    return await activityModel.chatActivity(body);
  },
};
