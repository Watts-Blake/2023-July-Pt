// 1. Import http
const http = require('http');
// 2. Call 'createServer' passing in a callback that takes in the request and response
const server = http.createServer((req, res) => {
  // color=brown&breed=shiba%20&name=Mike
  let reqBody = '';
  req.on('data', data => {
    reqBody += data;
  });
  req.on('end', () => {
    reqBody = reqBody.split('&');
    // ['color=brown', 'breed=shiba%20inu', 'name=Mike']
    reqBody = reqBody.map(pair => {
      return pair.split('=');
    });
    // [['color', 'brown'], ['breed', 'shiba%20inu'], ['name', 'Mike']]
    // [['color', 'brown'], ['breed', 'shiba+inu'], ['name', 'Mike']]
    reqBody = reqBody.map(pair => {
      return pair.map(el => {
        return el.replace('+', ' ');
      });
    });
    // [['color', 'brown'], ['breed', 'shiba inu'], ['name', 'Mike']]
    reqBody = reqBody.map(pair => {
      return pair.map(el => {
        return decodeURIComponent(el);
      });
    });
    // [['color', 'brown'], ['breed', 'shiba inu'], ['name', 'Mike']]
    let pojo = {};
    reqBody.forEach(pair => {
      pojo[pair[0]] = pair[1];
    });
    reqBody = pojo;
    console.log(reqBody);
  });
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    return res.end('This is the home page!')
  }
  if (req.method === 'POST' && req.url === '/') {
    console.log('Inside Route Handler')
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    return res.end(`${reqBody.name} is a ${reqBody.color} ${reqBody.breed}!`);
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.write('Hello');
  res.write(' ');
  res.write('World');
  return res.end('!');
});
// 3. Define the port to listen to
const port = 5000;
// 4. Tell the server to listen for requests on the port
server.listen(port, () => console.log(`Server is listening on port ${port}...`));