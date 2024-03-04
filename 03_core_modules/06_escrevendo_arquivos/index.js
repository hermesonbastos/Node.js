const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {

  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  fs.readFile("index.html ", (err, data) => {

    if(!name) {
      
    }

  })

});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
})