//var em loop

for (var i = 0; i < 10; i++) {
    console.log(i)
}

/*0
 *1
 *2
 *3
 *4
 *5
 *6
 *7
 *8
 *9
 */

console.log('i =', i)
//i= 10 , pois o var nao tem escopo de bloco e ( console.log('i =', i)) esta fora do laco de repeticao.

//Var em loop 2 

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
//10
funcs[8]()
//10
// mesmo retorno por que VAR NAO TEM ESCOPO DE BLOCO!!!