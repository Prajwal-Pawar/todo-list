// importing Task schema
const Task = require("../models/task")

// setting up home controller and rendering the page
module.exports.home = function(req, res){
    // fetching the data from DB
    Task.find({}, function(err, task){
        if(err){
            console.log(`error rendering the page : ${err}`);
            return;
        }
        
        // rendering the fetched data
        return res.render('home', {
            task: task
        });
    });
}