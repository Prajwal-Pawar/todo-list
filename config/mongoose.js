// imported mongoose
const mongoose = require('mongoose');

// connected to db
mongoose.connect('mongodb://localhost/todolist');

// initializing a connection
const db = mongoose.connection;

// if error
db.on('error', console.error.bind(console, 'Error Connecting to DB'));

// if connected
db.once('open', function () {
  console.log('Connected to the Database');
});

// exporting db
module.exports = db;
