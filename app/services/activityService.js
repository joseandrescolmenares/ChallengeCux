
const activityModel = require('../models/activityModel');

module.exports = {
  getActivity: () => {
    return activityModel.getActivity();
  },

};
