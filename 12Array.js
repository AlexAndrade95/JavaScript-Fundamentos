/*  Array []
 * em JS nao tem tamanho fixo!!!!!
 *usa-se [] colchetes 
 *usa-se , virgula para separar os elementos
 *
 *conceito = estrutura dinamica,unidimensional(linear), cada variavel tem o seu identificador
 *objetivo= agrupar multiplos valores em uma unica estrutura
 *Em javaScrip, o array e heterogeneo(Pode usar tipos diferentes)
 *o ideal e usar o array de forma homogenea (com um unico tipo de dado)
 */

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
// 7.7 9.2
console.log(valores[4])
// undefined (indefinido) 
valores[4] = 10
console.log(valores)
//[7.7, 8.9, 6.3, 9.2, 10]
console.log(valores.length)
//5
valores.push({id: 3}, false, null, 'teste')
// push = funcao para adicionar elementos no array
console.log(valores)
// [7.7, 8.9, 6.3, 9.2, {id: 3}, false, null, 'teste']
console.log(valores.pop())
// pop = funcao ultilizada para excluir elementos do array
delete valores[0]
console.log(valores)

console.log(typeof valores)
// object
//array e do tipo objeto