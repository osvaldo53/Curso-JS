let amigo = {nome: 'Braian',
sexo:'M',
peso: 100,
engordar(p=0){
    console.log('Engordou:')
    this.peso += p //this faz referencia ao proprio objeto
}}
amigo.engordar(50)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)