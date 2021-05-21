/* browser x node
 *evitar o escopo global (no browser é usado window ou this)
 *melhor usar o let, ou criando objetos
 */

//experimentos

let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
//undefined
console.log(global.b)
//123
console.log(this.c)
//456
console.log(module.exports.c)
//456
console.log(module.exports === this)
//true
console.log(module.exports)
//{ c: 456, d: false, e: 'teste'}


//criando uma variavel maluca: sem var e let!
abc = 3 //nao faça isso em casa!!!(está diretamente num contexto global no node)
console.log(global.abc)
//3

//module.exports = { e: 456, f: false, g: 'teste' }