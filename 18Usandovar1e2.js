VAR
Fuja do escopo Global!!!!(não ultilize variável global,pois todas vão para o mesmo lugar)
tem escopo global (variável fora de função)
tem escopo de função

{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)
// Será???

---------------------------------------------------------------------

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)
// local não definido, pq o escopo da variável(var local = 123) está dentro função
---------------------------------------------------------------------
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// dentro = 2
   fora = 2 ; pois o (var numero = 2 sobrescreceu o var numero = 1 )