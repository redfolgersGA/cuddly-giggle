//call the packages we need

var express = require('express');
var app = express();
var pgp = require('pg-promise')();
var db = pgp('postgress://emmanuelpaulino@localhost:3000/cuddly-giggle')
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');
var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
mongoose.connect('mongodb://:@ds113608.mlab.com:13608/beers_or_words')

// var beers = require('./cuddly-giggle/models/beerorwords')

//configure app to use mustacheExpress()

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));


//renders Emmanuel is learning CRUD html document
app.get('/', function(req, res) {
  res.render("index");
});


//Routes for API

var router = express.Router(); // get the express Router

//Middleware???? should i use idk yet sends back info as JSON data
router.use(function(req, res, next) {
  console.log('it did something.!!');
  next(); //literally on to the next route
});





// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'Emmanuels API!' });//here sends back JSON
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
//renders api???





app.use('/api', router);















//Starts the port

app.listen(port);
  console.log('starting awesome port ' + port);


