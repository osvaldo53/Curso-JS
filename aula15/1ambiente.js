let num = [5, 8, 4] //posições 0, 1, 2
console.log(`Nosso vetor é o ${num}`)

console.log(`O valor de num na posição 0 é ${num[0]}`) //vai mostrar o vetor na posição 0

num[3] = 6 //vai adicionar o valor na posição 3
console.log(`Nosso vetor é o ${num}`)

num.push(7) //vai criar uma nova posição e adicionar o valor, nesse caso criou a pos. 4
console.log(`Nosso vetor é o ${num}`)

console.log(`A quantidade de elementos do vetor é ${num.length}`) //comprimento do vetor

num.sort() //vai organizar o vetor em ordem crescente
console.log(`O vetor em ordem é ${num}`)