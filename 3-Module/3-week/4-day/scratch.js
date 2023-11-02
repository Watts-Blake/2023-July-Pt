const http = require('http');
const fs = require('fs');

const resDoc = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>#PAGENAME</h1>
    <p>This is the #PAGENAME .</p>
  </body>
  </html>
`;

const server = http.createServer((req, res) => {
  let reqBody = '';
  let pojo = {};
  req.on('data', (data) => {
    reqBody += data;
  });
  req.on('end', () => {
    console.log(req.headers)
    if (req.headers['content-type'] === 'application/json') {
      console.log('RAW: ', reqBody)
      // console.log(JSON.parse(reqBody));
      // console.log('SERIALIZED: ', JSON.stringify({'age':32, 'pets':['dog', 'cat', 'mouse']}));
    } else {
      reqBody = reqBody.split('&');
      reqBody = reqBody.map(pair => pair.split('='));
      reqBody = reqBody.map(pair => pair.map(el => el.replace('+', ' ')));
      reqBody = reqBody.map(pair => pair.map(el => decodeURIComponent(el)));
      reqBody.forEach(pair => pojo[pair[0]] = pair[1]);
      reqBody = pojo;
    }
  });

  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/html");
    return res.end(resDoc.replaceAll('#PAGENAME', 'Home Page'));
  }
  if (req.method === 'GET' && req.url === '/banana') {
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/html");
    return res.end(resDoc.replaceAll('#PAGENAME', 'Banana Page'));
  }
  if (req.method === 'GET' && req.url === '/catpic') {
    let catpic = fs.readFileSync('./cat.jpg');

    res.statusCode = 200;
    res.setHeader('Content-Type', "image/jpg");
    return res.end(catpic);
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', "text/plain");
  return res.end('Requested Resource Not Found');
})

const port = 5000;
server.listen(port, () => console.log(`Server is listening on port ${port}...`));