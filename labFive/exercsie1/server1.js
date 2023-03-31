const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from server 1!\n');
});

server.listen(8080, () => {
  console.log('Server 1 is running on port 8080');
});
