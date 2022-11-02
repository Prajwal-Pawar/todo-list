// importing express
const express = require('express');

// initializing router
const router = express.Router();

// importing home controller
const homeController = require('../controllers/home_controller');

// getting home route from controller
router.get('/', homeController.home);

// getting create-task route from controller
router.use('/create-task', require('./create'));

// getting delete-task route from controller
router.use('/delete-task', require('./delete'));

// exporting router
module.exports = router;