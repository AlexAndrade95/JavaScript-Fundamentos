//objeto 2 

console.log(typeof Object)
//function
console.log(typeof new Object)//instanciando um object com new (funcao)
//object

const Cliente = function() {}
console.log(typeof Cliente)
//function
console.log(typeof new Cliente)//instanciando uma const com new (funcao)
//object

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
//function
console.log(typeof new Produto())//instanciando uma class com new (funcao)
//object
