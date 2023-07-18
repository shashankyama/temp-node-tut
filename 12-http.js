const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Welcome to our About");
  }
  res.end(`<h1 style='color: white'>OOPs!</h1>
  <p>we cant find page u r looking for</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
