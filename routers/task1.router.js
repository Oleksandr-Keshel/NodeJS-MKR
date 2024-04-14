const express = require('express');
const router = express.Router();
const task1Controller = require('../controllers/task1.controller');
const task1Middleware = require('../middlewares/task1.middleware');


router.post("/", task1Middleware.task1InputDataValidation, task1Controller.createTask1);

module.exports = router;