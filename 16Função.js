Fun��o !!!
Se JS fosse pa�s , a Fun�a� seria o Presidente!!!!

/*fun�ao � um bloco de c�digo nomeado, verbo, uma a�ao, executa um processo 
  define um bolco, usando chaves {} 
  � muito importante definir BONS NOMES para as Fun��es
*/
----------------------------------------------------------------------------

console.log(typeof Object)
//Function
objeto em JS � uma fun��o!!!

class Produto {}
console.log(typeof Produto)
//Function
Produto em JS tamb�m � fun��o!!!!
----------------------------------------------------
Exemplos b�sicos de fun��es
Bloco de c�digo nomeado (Por enquanto)
usa-se {} para de�imitar a fun��o

// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
// 5
imprimirSoma(2)
//NaN (Not a Number)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
//12
imprimirSoma()
//NaN

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
// 5 
console.log(soma(2))
// 3
console.log(soma())
// NaN

-------------------------------------------------------
outro exemplo

// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
// 5 

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))
// 5 

// retorno impl�cito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
//-1

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')
//Legal!!!!