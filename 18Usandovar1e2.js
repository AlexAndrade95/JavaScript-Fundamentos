VAR
Fuja do escopo Global!!!!(n�o ultilize vari�vel global,pois todas v�o para o mesmo lugar)
tem escopo global (vari�vel fora de fun��o)
tem escopo de fun��o

{ 
    { 
        { 
            { 
                var sera = 'Ser�???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)
// Ser�???

---------------------------------------------------------------------

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)
// local n�o definido, pq o escopo da vari�vel(var local = 123) est� dentro fun��o
---------------------------------------------------------------------
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// dentro = 2
   fora = 2 ; pois o (var numero = 2 sobrescreceu o var numero = 1 )