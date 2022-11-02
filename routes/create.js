// importing express
const express = require('express');

// initializing router
const router = express.Router();

// importing create controller
const createController = require('../controllers/create_controller');

// getting create-task route from controller
router.post('/', createController.createTask);

// exporting router
module.exports = router;