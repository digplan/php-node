php-node
============

###Use PHP in nodejs, as Express view engine

#### $ npm install php-node

```javascript
var render = require('./index.js')({bin:"c://php//php.exe"});

render(__dirname+'/index.php', {}, function(e, r) {
    console.log(r);
})

// use PHP as view engine in Express
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
```
