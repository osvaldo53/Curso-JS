let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
let pos = num.indexOf(4) //procura o numero 4 dentro do vetor
if (pos == -1) { //se o valor nao existe na array o JS retornará posição -1
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}