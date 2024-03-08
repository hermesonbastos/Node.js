const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);

  console.log(filename);

  // if(filename.includes(".html")) {
  //   if(fs.existsSync(filename)) {
  //     fs.readFile("index.html", (err, data) => {
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.
  //     })

  //   } else {
  //     // enviar página 404: não encontrada
  //   }
  // }

})

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})