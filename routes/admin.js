const adminController = require('../controllers/admin');

const express = require('express');

const router = express.Router();

router.post("/add-todo",adminController.addTodo);

module.exports = router;