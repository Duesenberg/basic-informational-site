const http = require('http');
const fs = require('fs');
const url = require('url');

// Define port
const port = 3000;

// Create server
const server = http.createServer(function(req, res) {
  const path = url.parse(req.url).pathname;
  const fsCallback = function(error, data) {
      if(error) throw error;

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
  }

  switch(path) {
    case '/':
      doc = fs.readFile(__dirname + '/index.html', fsCallback);
      break;
    case '/index.html':
        doc = fs.readFile(__dirname + '/index.html', fsCallback);
        break;
    case '/about.html':
      doc = fs.readFile(__dirname + '/about.html', fsCallback);
      break;
    case '/contact-me.html':
      doc = fs.readFile(__dirname + '/contact-me.html', fsCallback);
      break;
    default:
      doc = fs.readFile(__dirname + '/404.html', fsCallback);
      break;
  }
});

server.listen(port, function(error) {
  if (error) console.log('Something went wrong...', error);
  else console.log('Server is listening on port ', port)
});
