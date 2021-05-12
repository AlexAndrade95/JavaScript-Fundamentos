/*Strings
 *delimitar por 3 tipos:
 *"" , '', Crase `
 */		 

//funções de exemplo:
const escola = "Cod3r"
console.log(escola.charAt(4))
//retornará a letra r , pois ela esta na 4ª colocacão na palavra
//r

console.log(escola.chartCodeAt(3)) 
//retornará a colocação de 3 dentro da tabela unicode "valor 51"
//51

console.log(escola.indexOf('3'))
// retornará se tem o valor 3 na palavra , retornando sua colocação
//3

console.log(escola.substring(1))
//retornará a palavra a partir do indice 1 "excluindo o indice 0"
//'od3r'

console.log(escola.substring(0,3))
//retornará a palavra a partir do indice 0 e mostrando até 3 valores
//'Cod'

//console.log('Escola'.concat(escola.concat("!")) //ou console.log('Escola'+ escola + "!")
//'Escola Cod3r!'

console.log(escola.replace(3,'e'))
//substituirá o 3 por e
//'Coder'

console.log('Ana,Maria,Pedro'.split(','))
//Reornará um Array com três elementos
//['Ana','Maria','Pedro']





