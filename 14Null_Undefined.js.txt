/*
Null & undefined 
Null é usado para zerar uma referencia
Atribuiçoes: 
em object = referencia (mesmo lugar na memória)
let = valor (mesmo valor da variável)
Null = ausencia de valor (não aponta pra endereço de memória)
undefined = não definido
*/
----------------------------------------------------
const a = {name:'Teste'}

a
{name:"Teste"}

const b = a 

b.name = 'Opa'
"Opa"
a

{name:"Opa"}

// mudando a ou b , ambos sofrem a mesma mudança,
por serem objetos ocupam o mesmo lugar na memória

---------------------------------------------------

let valor // não inicializada
console.log(valor)
//undefined
undefined = declarado mas não inicializado

valor = null // ausência de valor
console.log(valor)
//null
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
// undefined
console.log(produto)
// {}
produto.preco = 3.50
console.log(produto)
//{preco: 3.5 }

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)
// {preco: undefined}

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
// {preco: null }
 

