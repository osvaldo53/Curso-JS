let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
for(let pos=0; pos < valores.length; pos++) { //enquanto a posição for menor que o comprimento...
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//forma simplificada de fazer:
for(let pos in valores) { //para cada posição em valores...
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}