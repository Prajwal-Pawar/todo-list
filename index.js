// importing express
const express = require('express');
// port number
const port = 8000;

// importing the DB
const db = require('./config/mongoose');

const app = express();

// setting up static files 
app.use(express.static('./assets'));

// to use encoded data
app.use(express.urlencoded())

// setting up routes
app.use('/', require('./routes'));

// setting up view engine (ejs)
app.set('view engine', 'ejs');
app.set('views', './views');

// starting the server
app.listen(port, function(err){
    if(err){
        console.log(`Error starting the server ${err}`);
        return;
    }

    console.log(`Server is up and running at ${port}`);
});