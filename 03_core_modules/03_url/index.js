const url = require("url");
const address = "https://www.meusite.com.br/catalogo?produtos=cadeira"

const parsedURL = new url.URL(address);
console.log(parsedURL);