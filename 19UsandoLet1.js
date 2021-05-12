Let
tem esopo global
tem escopo de fun��o
tem escopo de bloco

let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// dentro = 2
   fora = 1 ; pois o let est�o em escopos diferentes
              a preferencia � para o escopo menor
