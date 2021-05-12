/*
TemplateString � usado para concatenar(somar) as strings 
de uma forma mais est�tica
*/
// ultiliza-se a crase(`) para come�ar e terminar

//Templates Strings // usa-se a crase (e não aspas simples) ` 
                    
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
