
let http = require("http");

let url = require("url");

http.createServer((req,res) => {
  let {query} = url.parse(req.url, true);
  console.log(query);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<h3>My name is ${query.username} and my password is ${query.password}</h3>`);
}).listen(1000); 