
const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/users', userController.getUsers);

module.exports = router;
