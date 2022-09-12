// Dependencies
const express = require('express');
const app = express();
const dotenv = require('dotenv');

// secret path
dotenv.config({path:'config.env'});
// port for others
const port = process.env.port || 8080




// localhost listen
app.listen(port,()=>{console.log('server is running on http://localhost:${port}')});







