/*
Booleanos = false or true , 
o s�mbolo (!) representa a nega��o l�gica(false); (!!) representa afirma��o(true)
*/
let isAtivo = false
console.log(isAtivo)
//false
isAtivo = true
console.log(isAtivo)
//true
isAtivo = 1
console.log(!!isAtivo)
// o caracter ! significa negativo ou n�o(usado neste caso para mostrar se o valor � verdaeiro ou falso),
!! significa o valor inicial da vari�vel
//Nete caso retornar� true (verdadeiro)

console.log('os verdadeiros...')
//os valores a seguir retornar� sempre true
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
//os valores a seguir retornar� sempre false (falso)
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
//essa forma � muito ultilizada para atribuir um valor a vari�vel
neste caso se o usuario n�o digitar o nome, 
a vari�vel ser� negativa e retornar� a string 'Desconhecido')