console.log(7/0)
//Infinity
console.log("10" / 2)//JS converte a string para Number (pois é fracamente tipada)
//5 
console.log("Show" * 2)//Nesse caso JS não converte
//NaN
console.log(0.1 + 0.7)//não é 0.8 por causa de uma especificação(pois é mais rápida)
//0.7999999999999999
//console.log(10.345,toFixed(2))// não é possivel sem ()
console.log((10.345).toFixed(2))//Para limitar as casas decimais
//10.35