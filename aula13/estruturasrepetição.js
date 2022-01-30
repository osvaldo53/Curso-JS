var c = 1
while (c <= 5) {
    console.log(`Passo ${c}`)
    c++ //c = c + 1
} //a estrutura while testa e depois executa - estrutura de repetiçao com teste logico no inicio

var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 5)
//a estrutura 'do while' executa primeiro e depois testa - estrutura de repetição com teste logico no final

var c = 1
for (var c = 1;c <= 5;c++) {
    console.log(c)
}
//a estrutura 'for' tem variavel de controle, primeiro se insere a var, depois o teste logico, e por fim o incremento
