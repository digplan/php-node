var express = require('express'),
	app = express(),
	phpnode = require('./index.js')({bin:"c:\\php\\php.exe"});

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