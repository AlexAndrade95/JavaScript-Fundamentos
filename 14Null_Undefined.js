/*
 *Null & undefined 
 *Null e usado para zerar uma referencia
 *Atribuicoes: 
 *em object = referencia (mesmo lugar na memoria)
 *let = valor (mesmo valor da variavel)
 *Null = ausencia de valor (nao aponta pra endereco de memoria)
 *undefined = nao definido
 */

 //no browser ...
const a = {name:'Teste'}

a
{name:"Teste"}

const b = a 

b.name = 'Opa'
"Opa"
a

{name:"Opa"}

/*mudando a ou b , ambos sofrem a mesma mudanca,
 *por serem objetos ocupam o mesmo lugar na memoria 
 */

let valor // nao inicializada
console.log(valor)
//undefined
undefined //declarado mas nao inicializado

valor = null // ausencia de valor
console.log(valor)
//null
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
//undefined
console.log(produto)
//{}
produto.preco = 3.50
console.log(produto)
//{preco: 3.5 }

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)
//{preco: undefined}

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)
// {preco: null }
 

