const x = 10;

try {
  x = 2;
} catch(err) {
  console.log(`Erro: ${err}`);
}

console.log("O código continua");