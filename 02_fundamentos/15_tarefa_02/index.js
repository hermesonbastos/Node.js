// 1. Crie um novo projeto que aceite pacotes externos
// 2. Instale o inquirer e o chalk
// 3. Utilize o inquirer para receber o nome e a idade do usuário
// 4. Apresente esta resposta com uma cor de fundo amarela e texto preto
// 5. Dica: Você pode utilizar bgYellow e black
// 6. Insira um tratamento para um possível erro do inquirer com o catch

const inquirer = require("inquirer");
const chalk = require("chalk")

inquirer.prompt([
  {
    name: "p1",
    message: "Informe o seu nome: ",
  },
  {
    name: "p2",
    message: "Digite a sua idade: ",
  },
]).then((answers) => {

  if(!answers.p1 || !answers.p2) {
    throw new Error(`Nome e idade são obrigatórios!`);
  }

  console.log(chalk.bgYellow.black(`Olá, este é o ${answers.p1}, ele tem ${answers.p2} anos.`));

}).catch((err) => {

  console.log(`${err}`);

});
