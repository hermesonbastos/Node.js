
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question("Qual a sua linguagem de programação preferida? ", (linguagem) => {

  if(linguagem === "Python") {
    console.log("Isso nem é linguagem!")
  } else {
    console.log(`A sua linguagem de programação preferida é ${linguagem}`)
  }
  readline.close()
  
})