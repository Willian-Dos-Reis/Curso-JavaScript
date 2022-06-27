// a Diferença entre var e let

var carro = 5;
let moto = 6;

// no var o valor é modificado dentro do bloco e quando for pra fora continua modificado 

 console.log(carro) // 5
if (carro == 0 ) { 
    var carro = 1 
    console.log(carro) // 1
}
console.log(carro)  // 1
 
// no let o valor é modificado dentro do bloco e quando for pra fora volta a ser como era antes

console.log(moto) // 6
if(moto == 0){
    let moto = 2 
    console.log(moto) //2
}
console.log(moto) // 6


