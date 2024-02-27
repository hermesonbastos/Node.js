const chalk = require('chalk');

const nota = Math.floor(Math.random() * 10);

if(nota >= 7) {
  console.log(chalk.green.bold(`Parabéns, você foi aprovado com um ${nota}`));
} else {
  console.log(chalk.red.bold(`Infelizmente você foi reprovado, nota: ${nota}`))
}