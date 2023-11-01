const http = require('http');

const server = http.createServer((req, res) => {
  req.statusCode = 404;
  return req.end('Endpoint not Defined');
});

const port = 5000;
server.listen(port, () => console.log(`Server is listening on port ${port}...`))