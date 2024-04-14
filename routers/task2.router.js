const express = require('express');
const router = express.Router();
const task2Controller = require('../controllers/task2.controller');
const task2Middleware = require('../middlewares/task2.middleware');


router.post("/",task2Middleware.task2InputDataValidation,  task2Controller.createTask2);

module.exports = router;