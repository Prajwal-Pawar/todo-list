// importing the mongoose
const mongoose = require('mongoose');

// creating schema for task
const taskSchema = new mongoose.Schema({
    description: {
        type: String, 
        required: true
    },
    category: { 
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);

//  exporting the schema
module.exports = Task;