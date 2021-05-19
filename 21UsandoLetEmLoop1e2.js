//let em loop

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)

/* 1
 *2
 *3
 *4
 *5
 *6
 *7
 *8
 *9
 */

const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
//2
funcs[8]()
//8]
// valores diferentes pois LET TEM ESCOPO DE BLOCO!!!
