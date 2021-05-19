/*Let
 *tem esopo global
 *tem escopo de funcao
 *tem escopo de bloco
 */

 let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// dentro = 2
//fora = 1 ; pois o let estao em escopos diferentes a preferencia e´ para o escopo menor
