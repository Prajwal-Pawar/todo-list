// importing express
const express = require('express');

// initializing router
const router = express.Router();

// imporing delete controller
const deleteController = require('../controllers/delete_controller');

//getting delete task route from controller
router.post('/:id', deleteController.delete);

// exporting router
module.exports = router;
