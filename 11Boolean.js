/*
Booleanos = false or true , 
o simbolo (!) representa a negacao logica(false); (!!) representa afirmacao(true)
*/
let isAtivo = false
console.log(isAtivo)
//false
isAtivo = true
console.log(isAtivo)
//true
isAtivo = 1
console.log(!!isAtivo)
/* o caracter ! significa negativo ou nao(usado neste caso para mostrar se o valor e verdaeiro ou falso),
 *!! significa o valor inicial da variavel
 * Neste caso retornara true (verdadeiro)
 */
console.log('os verdadeiros...')
//os valores a seguir retornam sempre true
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![]) //Array
console.log(!!{}) //objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
//os valores a seguir retornam sempre false (falso)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
//essa forma e muito ultilizada para atribuir um valor a variavel
/*neste caso se o usuario nao digitar o nome, 
 *a variavel sera negativa e retornara a string 'Desconhecido')
 */