// 1. Import http
const http = require('http');
// 2. Call 'createServer' passing in a callback that takes in the request and response
const parseBody = (reqBody) => {
  // console.log(reqBody);
  reqBody = reqBody.split('&');
  // console.log(reqBody);
  reqBody = reqBody.map(pair => {
    return pair.split('=')
  });
  // console.log(reqBody);
  // reqBody = reqBody.map(pair => {
  //   return pair.map( el => {
  //     return el.replace('+', ' ');
  //   });
  // });
  // console.log(reqBody);
  reqBody = reqBody.map(pair => {
    return pair.map(el => {
      return decodeURIComponent(el)
    });
  });
  // console.log(reqBody);
  let pojo = {};
  reqBody.forEach(pair => {
    pojo[pair[0]] = pair[1];
  });
  reqBody = pojo;
  // console.log(pojo);
  return pojo;
};
const server = http.createServer((req, res) => {
  ;
  // GET /
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    return res.end('This is the home page');
  }
  if (req.method === 'POST' && req.url === '/') {
    let reqBody = '';
    req.on('data', (data) => {
      reqBody += data;
    });
    req.on('end', () => {
      reqBody = parseBody(reqBody)
    })
    console.log(reqBody);
    res.statusCode = 200;
    return res.end('made it');
  }
  if (req.method === 'GET' && req.url === '/banana') {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    return res.end('There are bananas');
  }

  res.statusCode = 404;
  return res.end('Endpoint not Found');
});
// 3. Define the port to listen to
const port = 5000;
// 4. Tell the server to listen for requests on the port
server.listen(port, () => console.log(`Server is listening on port ${port}...`));
