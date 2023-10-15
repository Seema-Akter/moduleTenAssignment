const express = require('express');
const app = new express();
const router = require('./src/routes/api');
const cookieParser = require('cookie-parser');
const cors = require('cors');
var hpp = require('hpp');
//var sanitizerPlugin = require(ExpressMongoSanitize);
const helmet = require('helmet');
const ratelimit = require('express-rate-limit');
const ExpressMongoSanitize = require('express-mongo-sanitize');
const mongoose = require('mongoose');

app.use(express.static('client/build'));
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(hpp());
app.use(ExpressMongoSanitize());
app.use(helmet());



// mongodb connection
let URI= "mongodb+srv://<username>:<password>@cluster0.tu7m44e.mongodb.net/CRUD"
let OPTION={user:'demo', pass:'demo', autoIndex:true};
mongoose.connect(URI,OPTION).then((res) => {
    console.log("Database connected");
  }).catch(error => {
     console.log(error);
   });

//route define
app.use('/api',router);
module.exports=app;

// undefine route
app.use((req,res)=>{
    res.status(404).send('404 not found');
})



