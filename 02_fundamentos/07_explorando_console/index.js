// mais de um valor
const x = 10;
const y = "Algum Texto";
const z = [1, 2];
const nome = "Hermeson";

console.log(x, y, z);

// contagem de imporessões
console.count(`O valor de x é ${x}, contagem:`);
console.count(`O valor de x é ${x}, contagem:`);
console.count(`O valor de x é ${x}, contagem:`);
console.count(`O valor de x é ${x}, contagem:`);
console.count(`O valor de x é ${x}, contagem:`);

// variável entre string
console.log("O nome é %s e ele é programador", nome);

// limpar o console
setTimeout(() => {
  console.clear();
}, 2000);