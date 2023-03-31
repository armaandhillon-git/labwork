const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from server 2!\n');
});

server.listen(8081, () => {
  console.log('Server 2 is running on port 8081');
});
