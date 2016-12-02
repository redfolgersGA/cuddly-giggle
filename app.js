var express = require('express');
var app = express();
var pgp = require('pg-promise')();
var db = pgp('postgres://emmanuelpaulino@localhost:5432/project_2')
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


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

app.get('/api/users', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');

  res.send(user_id + ' ' + token + ' ' + geo);
});

app.post('/api/searchTerm', function(req, res){
  const user_id = 1;
  const input = req.body.input;
  //console.log(input, user_id)
  // db.one("SELECT * FROM user WHERE id=$1", [user_id]).then(function(sadf){
  //   console.log(sadf)
  //   res.send(sadf)
  // }).catch(function(data){
  //   console.log('error', data)
  // })
  db.none("INSERT INTO searches (term, user_id) VALUES ($1, $2)",
    [input, user_id]).then(function(){
      console.log('saved')
      res.send('save successful');
  }).catch(function(error){
    console.log('error', error)
    res.send(error)
  })
});




















app.listen(port);
  console.log('starting awesome port ' + port);

