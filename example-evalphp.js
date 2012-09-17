// no need for {bin:"c://php//php.exe"}
// if php is installed and on your path

var render = require('./index.js')({bin:"c://php//php.exe"});

render(__dirname+'/index.php', {}, function(e, r) {
    console.log(r);
})
