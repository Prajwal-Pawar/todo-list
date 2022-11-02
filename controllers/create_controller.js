// importing Task schema
const Task = require("../models/task")

// setting up create task controller
module.exports.createTask = function(req, res){
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err, newTask){
        if(err){
            console.log('Error in creating Task');
            return;
        }
        return res.redirect('back');
    });
}