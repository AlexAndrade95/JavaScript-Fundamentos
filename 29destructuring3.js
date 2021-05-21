//destructuring3, usando em funcao

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
//valores randomicos entre os parametros .... 41,42,43,44..50

console.log(rand({ min: 955 }))
// valores randomicos entre os parametros ....955 a 1000

console.log(rand({}))
//valores randomicos entre os parametros ....0 a 1000


console.log(rand())
// NaN