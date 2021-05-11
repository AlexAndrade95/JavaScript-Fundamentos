const peso1 = 1.0
const peso2 = Number('2.0')// outra forma de declarar number

console.log(peso1,peso2)
//1 2
console.log(Number.isInteger(peso1))
//true
console.log(Number.isInteger(peso2))
//true

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1  * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//Funcao tofixed é usado para limitar o numero de casas decimais
//7.87
console.log(media.toString(2))//Funçao toString é usada para converter para string , quando(2) será convertido para binário)
//111.11011110111110011101101100100010110100001110010101
console.log(typeof media)
//number
console.log(typeof Number)
//function