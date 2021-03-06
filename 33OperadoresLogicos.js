//operadores Lógicos

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //ou usando (||)
    const comprarTv50 = trabalho1 && trabalho2    //e usando(&&)
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor (ou exlusivo)(precisa ser diferentes; v ou f; f ou v = v) 
    const comprarTv32 = trabalho1 != trabalho2 //Simula ou exclusivo usando o diferente (!=)
    const manterSaudavel = !comprarSorvete //operador unário (negação lógica)

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
/* {
  comprarSorvete: true,
  comprarTv50: true,
  comprarTv32: false,
  manterSaudavel: false
}
 */
console.log(compras(true, false))
/* {
  comprarSorvete: true,
  comprarTv50: false,
  comprarTv32: true,
  manterSaudavel: false
} */

console.log(compras(false, true))
/* {
  comprarSorvete: true,
  comprarTv50: false,
  comprarTv32: true,
  manterSaudavel: false
}
 */
console.log(compras(false, false))
/* {
  comprarSorvete: false,
  comprarTv50: false,
  comprarTv32: false,
  manterSaudavel: true
} */
