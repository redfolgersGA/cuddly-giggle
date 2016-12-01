var express = require('express');
var app = express();
var pgp = require('pg-promise')();
var db = pgp('postgress://emmanuelpaulino@localhost:3000/project_2')
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');
var port = process.env.PORT || 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');//
app.use("/", express.static(__dirname + '/public'));//looks for static files in public folder

//rendering EMMANUEL IS LEARNING CRUD html IN VIEWS FOLDER
app.get('/', function(req, res) {
  res.render("index");
});


app.get('/sample', function(req, res) {//my url...maybe use req.params to replace with api url
    res.send('this is a sample!');
});

app.get('/', function(req, res) {
  res.render("index");
});




















app.listen(port);
  console.log('starting awesome port ' + port);

