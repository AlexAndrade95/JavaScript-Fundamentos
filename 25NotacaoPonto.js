/*Notação Ponto
 *Muito usada no JS
 */

console.log(Math.ceil(6.1)) //math.cell é usado para um arredondamento para cima
//7 

const obj1 = {}
obj1.nome = 'Bola'
ou //obj1['nome'] = 'Bola'
console.log(obj1.nome)
//Bola

function Obj(nome) {
    this.nome = nome // this deixará o nome visível
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
//Cadeira
console.log(obj3.nome)
//Mesa
obj3.exec()
//Exec...