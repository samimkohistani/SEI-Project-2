// Dependencies
const express = require('express');
const app = express();
const morgan = require("morgan");
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const { dirname } = require('path');
const { json } = require('body-parser');

// secret path
dotenv.config({path:'config.env'});
// port for others
const port = process.env.port || 8080

// log request
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

// set view engine 
app.set("view engine", "ejs");

// laod assets 
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));







//routes

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/add-user', (req, res) => {
    res.render('add_user');
});



// localhost listen
app.listen(port,()=>{console.log('server is running on http://localhost:${port}')});







