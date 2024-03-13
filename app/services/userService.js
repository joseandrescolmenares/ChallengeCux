// app/services/userService.js
const userModel = require('../models/userModel');

module.exports = {
  getUsers: () => {
    return userModel.getUsers();
  }
};
