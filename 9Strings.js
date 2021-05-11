Strings
	delimitar por 3 tipos:
		"" , '', Crase ` 
//fun��es de exemplo:
 const escola = "Cod3r"
 console.log(escola.charAt(4))
//retornar� a letra r , pois ela esta na 4� coloca��o na palavra
 console.log(escola.chartCodeAt(3)) 
//retornar� a coloca��o de 3 dentro da tabela unicode "valor 51"
console.log(escola.indexOf('3'))
// retornar� se tem o valor 3 na palavra , retornando sua coloca��o
console.log(escola.substring(1))
//retornar� a palavra a partir do indice 1 "excluindo o indice 0"
'od3r'
console.log(escola.substring(0,3))
//retornar� a palavra a partir do indice 0 e mostrando at� 3 valores
'Cod'
console.log('Escola'.concat(escola.concat("!")) ou console.log('Escola'+ escola + "!")
'Escola Cod3r!'
console.log(escola.replace(3,'e'))
//substituir� o 3 por e
'Coder'
console.log('Ana,Maria,Pedro.split(','))
//Reornar� um Array com tr�s elementos
['Ana','Maria','Pedro']
Templates Strings // usa-se a crase ` 
const nome = 'Rebeca'
const concatenacao = 'Ol�' + nome + '!'
const template = `
	Ol� 
	s{nome}!`
console.log(concatena��o, template)
//Retornar� a express�o
Ol�
Rebeca!
//Expres�es
console.log(`1+1 = ${1+1})
//retornar� a express�o 
1+1=2

