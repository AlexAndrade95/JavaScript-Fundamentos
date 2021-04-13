/*
TemplateString é usado para concatenar(somar) as strings 
de uma forma mais estética
*/
// ultiliza-se a crase(`) para começar e terminar


const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
//Template          //Crase simples
const template = ` 
     Olá 
     ${nome}!`      //Crase simples
console.log(concatenacao, template)

//expressões...
console.log(`1 + 1 = ${1+1}`) //1+1 irá apresentar o texto , ${} irá fazer a soma

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)
