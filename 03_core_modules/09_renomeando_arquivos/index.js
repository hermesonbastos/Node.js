const fs = require("fs");

fs.rename("arquivo.txt", "novonome.txt", (err) => {

  if(err) {
    console.log(err);
    return;
  }

  console.log("Arquivo renomeado com sucesso!");

})