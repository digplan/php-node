php-node
============

###Use PHP in nodejs, as Express view engine

####app.js
```javascript
// parse a PHP file and get output (php is installed and on your path)
var render = require('php-node')();
render('index.php');

// specify path to PHP
var render = require('php-node')({bin:"c:\\php\\php.exe"});
render('index.php');

// use PHP as view engine in Express
var express = require('express'),
	app = express(),
	phpnode = require('php-node')({bin:"c:\\php\\php.exe"});

app.set('views', __dirname);
app.engine('php', phpnode);
app.set('view engine', 'php');

app.all('/index.php', function(req, res) {
   res.render('index');
})

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
})
```
