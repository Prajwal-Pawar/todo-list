// importing Task schema
const Task = require("../models/task");

// setting up create task controller
module.exports.delete = function(req, res){
    // getting id from query
    let queryId = req.query;
    let id = Object.keys(queryId);

    // finding and deleting tasks from database using id we got from query
    Task.findByIdAndDelete(id, function(err){
       if(err){
        console.log(`Error deleting the Task : ${err}`);
        return;
       }
       return res.redirect('back');
    });
}