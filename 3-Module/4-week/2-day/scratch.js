const http = require('http');

const server = http.createServer((req, res) => {
  let reqBody = '';
  req.on('data', data => {
    reqBody += data;
  })
  req.on('end', () => {
    if (reqBody) {
      req.body = JSON.parse(reqBody)
    }

    if (req.method === 'GET' && req.url === '/giveMe') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('You Got It!');
    }
    if (req.method === 'POST') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(req.body))
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Resource not found...')
  });

});

const port = 5000;
server.listen(port, () => console.log(`Server is listening on port ${port}...`));