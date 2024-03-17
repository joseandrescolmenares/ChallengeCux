
const activityService = require('../services/activityService');

module.exports = {
  getActivity: (req, res) => {
    const activitys = activityService.getActivity();
    res.json(activitys);
  },
};

