const fs = require("fs");

const arquivo = "arquivo.txt";
const novoarquivo = "novonome.txt";

fs.rename(arquivo, novoarquivo, (err) => {

  if(err) {
    console.log(err);
    return;
  }

  console.log(`Arquivo ${arquivo} renomeado com sucesso para ${novoarquivo}!`);

})