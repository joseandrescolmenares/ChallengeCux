
const userService = require('../services/userService');

module.exports = {
  getUsers: (req, res) => {
    const users = userService.getUsers();
    res.json(users);
  }
};
