var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Anish, Hey work hard You have a long way to catch up. I knw you will.');
});
server.listen(8080);
