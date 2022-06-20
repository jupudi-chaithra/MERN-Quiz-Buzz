const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser())
dotenv.config({path: './config.env'});
require('./db/conn')
//const User = require('./model/userSchema');

app.use(express.json())

app.use(require('./router/auth'));
 

const PORT = process.env.PORT



//Middleware
// const middleware = (req, res, next) => {
//     console.log(`Hello Middleware`);
//     next();
// } 



// app.get('/about', (req, res) => {
//      console.log('Hello Topics');
//     res.send(`Hello about world from the server`)
// });

app.get('/contact', (req, res) => {
    res.send(`Hello contact world from the server`)
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`)
});

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})


//strength
//fluency
//clarity
//rebuttal
//able to point out loop holes in opponent's arguments