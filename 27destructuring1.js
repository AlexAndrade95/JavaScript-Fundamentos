/*destructuring1
*operador para tirar algo específico de uma estrutura
*novo recurso do ES2015
*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //usando o operador destructuring 
console.log(nome, idade)
//Ana 5

const { nome: n, idade: i } = pessoa //usando o operador destructuring e mudando os nomes das variáveis
console.log(n, i)
//Ana 5 

const { sobrenome, bemHumorada = true } = pessoa //usando o operador destructuring
console.log(sobrenome, bemHumorada)
//undefined true; pois não tem o atributo buscado

const { endereco: { logradouro, numero, cep } } = pessoa //usando o operador destructuring
console.log(logradouro, numero, cep)
//Rua ABC 1000 undefined

const { conta: { ag, num } } = pessoa //usando o operador destructuring
console.log(ag, num)
//erro!! pois não existe!
