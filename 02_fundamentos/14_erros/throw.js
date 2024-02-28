const x = "10";

if (!Number.isInteger(x)) {
  throw new Error("O valor de X deve ser um número inteiro");
}

console.log("continuando o código...");
