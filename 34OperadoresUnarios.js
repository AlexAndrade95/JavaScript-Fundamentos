//Operadores unários 

let num1 = 1
let num2 = 2

num1++ //forma pos-fixada que acrescenta uma unidade 
console.log(num1)
//2
--num1 //forma pre-fixada para subtrair uma unidade
console.log(num1)
//1

console.log(++num1 === num2--)//as duas operações valem 2
//true

console.log(num1 === num2) //num1 = 1 , num2 = 2
//false