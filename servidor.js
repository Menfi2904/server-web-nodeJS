const http = require("http");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  const url = new URL(req.url, `https://localhost:${port}/`);
  if (url.pathname === "/") {
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ name, email }));
  } else if (url.pathname === "/user") {
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");
    const object = {
      name: name,
      email: email,
    };
    res.writeHead(200, { "Content-type": "application/Json" });
    res.end(JSON.stringify(object));
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`el servidor se ejecuto correctamente en http://localhost:8000/user 
  y en http://localhost:8000/`);
});

module.exports = server;
