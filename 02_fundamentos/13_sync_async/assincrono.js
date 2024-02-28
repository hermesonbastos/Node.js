const fs = require("fs");

console.log("Início");

fs.writeFile("arquivoAsync.txt", "Oi", (err) => {
  console.log("Arquivo Criado");
});

console.log("Fim");
