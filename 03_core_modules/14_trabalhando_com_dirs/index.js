const fs = require("fs");

if(!fs.existsSync("./minhapasta")) {
  console.log("Essa pasta não existe, iremoms criá-la agora...");
  fs.mkdirSync("minhapasta");
}

if(fs.existsSync("./minhapasta")) {
  console.log("Pasta encontrada!")
}