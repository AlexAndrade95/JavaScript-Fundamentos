/*VAR
Fuja do escopo Global!!!!(nao utilize variavel global,pois todas vao para o mesmo lugar)
tem escopo global (variavel fora de funcao)
tem escopo de funcao
*/

{ 
    { 
        { 
            { 
                var sera = 'Sera???'
                console.log(sera)
                // Sera???
            }
        }
    }
}

console.log(sera)
// Sera???


function teste() {
    var local = 123
    console.log(local)
    //123
}

teste()
console.log(local)
// local nao definido, pq o escopo da variavel(var local = 123) esta dentro funcao

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// dentro = 2
// fora = 2 ; pois o (var numero = 2 sobrescreceu o var numero = 1 )