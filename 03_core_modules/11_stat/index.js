const fs = require("fs");

fs.stat("arquivo.txt", (err, stat) => {

  if(err) {
    console.log(err);
    return;
  }

  console.log(stat.isDirectory());
  console.log(stat.isFile());
  console.log(stat.size);
  console.log(stat.ctime);
  console.log(stat.isSymbolicLink());

})