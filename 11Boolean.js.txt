/*
Booleanos = false or true , 
o símbolo (!) representa a negação lógica(false); (!!) representa afirmação(true)
*/
let isAtivo = false
console.log(isAtivo)
//false
isAtivo = true
console.log(isAtivo)
//true
isAtivo = 1
console.log(!!isAtivo)
// o caracter ! significa negativo ou não(usado neste caso para mostrar se o valor é verdaeiro ou falso),
!! significa o valor inicial da variável
//Nete caso retornará true (verdadeiro)

console.log('os verdadeiros...')
//os valores a seguir retornará sempre true
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
//os valores a seguir retornará sempre false (falso)
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
//essa forma é muito ultilizada para atribuir um valor a variável
neste caso se o usuario não digitar o nome, 
a variável será negativa e retornará a string 'Desconhecido')