const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const Ninja = require('./models')
// const routes = require('./api');


//setting express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');




app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./api'));
// error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
})

// app.get('/api',function(req,res){
//     console.log('GET request');
//     res.send({name:"jeevi"});
// });


//requests
app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');
}
);


