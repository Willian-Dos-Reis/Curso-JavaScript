/* var num = [4, 5, 6, 7, 8]

for (let pos = 0 ; pos <num.length;pos++){
    console.log(`a posicao ${pos} tem o valor ${num[pos]}`)
} /*  

/* simplificado */

var num = [ 3,4,5,7,54,23]

for ( var pos in num ){ // crir uma var pos para cada elemento num 
    console.log(`a posicao ${pos} tem o valor de ${num[pos]}`)
}