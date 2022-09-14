// Dependencies
const express = require('express');
const app = express();
const morgan = require("morgan");
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const { dirname } = require('path');
const { json } = require('body-parser');
// connecting mongoDB

const mongoDB = require('./server/database/connection');
const { connect } = require('http2');
// secret path

dotenv.config({path:'config.env'});

// port for others
const port = process.env.port || 8080

// log request
app.use(morgan('tiny'));

// mongoDB connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

// set view engine 
app.set("view engine", "ejs");

// laod assets 
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));



// load routes

app.use('/', require('./server/routes/router'));


// localhost listen
app.listen(port,()=>{console.log('server is running on http://localhost:${port}')});







