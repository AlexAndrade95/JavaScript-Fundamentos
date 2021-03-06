//destructuring4, usando em array

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arrendondando para baixo(floor)
}

console.log(rand([50, 40]))
//retornará valores randômicos de acordo com o intervalo... 41,42,45,44...50

console.log(rand([992]))
//retornará valores randômicos de acordo com o intervalo...992 a 1000

console.log(rand([, 10]))
//retornará valores randômicos de acordo com o intervalo...0 a 10

console.log(rand([]))
//retornará valores randômicos de acordo com o intervalo...0 a 1000

console.log(rand())
//erro!!!!