const express = require('express');
// importing route from model folder 
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// app creation
const app = express();

// mongodb connection using mongoose
mongoose.connect('mongodb://127.0.0.1/category');
mongoose.Promise = global.Promise;
// for getting body data we need to parse 
app.use(bodyParser.json());
// main route of application
app.use('/api',routes);

//server is listing on port no 4000

app.listen(process.env.port || 4000, function(){
	console.log("listen to port 4000");
});
