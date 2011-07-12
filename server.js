var express = require('express')
  , app = express.createServer()
  , colors = require('colors')
  , markdown = require('markdown').markdown
  , fs = require('fs')
  , PORT = 8000
  ;

// match app routes before serving static file of that name
app.use(app.router);
app.use(express.static(__dirname + '/public'));

//
// These routes only work if a static file has not already been served.
//
app.post('/', function(req, res, next) {

  // e.g. POST http://localhost:8000?input=oliver
  if (req.query.input) {
    say('Your highness, ' + req.query.input + ' here and forever at your'
       + ' service.');
    res.end();
  }
});

app.get('/README.md', function(req, res, next) {
 fs.readFile('./README.md', function(err, data) {
   req.header('content-type', 'text/plain');
   res.send(data);
 });
})

console.log('Your highness, at your service:'.yellow
  + ' http://localhost:%d'.magenta, PORT);

app.listen(PORT);

//
// NowJS component
//
var nowjs = require('now');
var everyone = nowjs.initialize(app);

everyone.now.logOnServer = function(message) {
  console.log(message.green);
};

function say(words) {
  require('child_process').exec('/usr/bin/say ' + words);
};
