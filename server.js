const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router/routes');
const app = express();


// mongo connectin
mongoose.connect('mongodb://localhost:27017/ridedb', {
  //useMongoClient: true
});
mongoose.Promise = global.Promise;

// check mongodb connection
const dbconnect = mongoose.connection;
dbconnect.on('error', console.error.bind(console, 'connection error'));
dbconnect.once('open', () => {
  console.log('Connected');
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = process.env.PORT || 8081;



app.use('/api',router);
app.listen(port);
console.log("myFirstApp console is running");

