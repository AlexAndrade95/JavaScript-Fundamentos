/*Object {}
 *colecao de chaves e valores
 *usa-se chaves {} para escrever objetos
 *pode-se usar de forma dinamica!!
 */

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaco

console.log(prod1)
// { nome: 'Celular Ultra Mega', preco: 4998.9, 'Desconto Legal': 0.4 }

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)
// { nome: 'Camisa Polo', preco: 79.9 }