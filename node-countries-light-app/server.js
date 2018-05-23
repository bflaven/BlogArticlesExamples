/* server.js */
const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();


// Serving static files from "public" folder.
// Will be useful for apidoc
app.use(express.static('public'))


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

/* ---  DB --- */
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
/* --- //  DB --- */

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Yallah, Welcome to Country Light App. A prototype to play with Countries"});
});

// Define the other routes
// Require Notes routes
require('./app/routes/country.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Country Light App is up & the server is listening on port 3000");
});



