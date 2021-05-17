/*
TemplateString e usado para concatenar(somar) as strings 
de uma forma mais estetica
*/
// ultiliza-se a crase(`) para comecar e terminar

//Templates Strings usa-se a crase (e não aspas simples) ` 
                    
const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `    
	Olá
	${nome}!`
console.log(concatenacao, template)
/*Retornará a expressão
 *Olá
 *Rebeca!
 */

//Expresões
console.log(`1+1 = ${1+1}`)
/*retornará a expressao 
 *1+1=2
 */

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)
//Ei... CUIDADO!