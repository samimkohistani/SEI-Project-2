// Dependencies
const express = require('express');
const dotenv = require('dotenv');
const morgan = require("morgan");
const bodyparser = require('body-parser');
const path = require('path');

const connectDB =require('./server/database/connection');

const app = express();

// secret path
dotenv.config({path:'config.env'});
// port for others
const PORT = process.env.PORT || 8080

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
app.listen(PORT,()=>{console.log('server is running on http://localhost:${PORT}')});





