// app/services/userService.js
const activityModel = require('../models/activityModel');

module.exports = {
  getActivity: () => {
    return activityModel.getActivity();
  }
};
