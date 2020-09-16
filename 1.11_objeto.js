const prod1 = {}
prod1.nome = 'Xiaomi'
prod1.preco = 4998.90
prod1['Desconto'] = 0.20   //evitar atributos com espaço

console.log(prod1)

//Forma Direta
//Chave(Identificador): Valor(variável)

const prod2 ={
    nome: 'Camisa Polo',
    preço: 99,
    obj:{
        blabla:1,
        obj:{
            blabla: 2
        }
    }
}

//JSON!!!!!!

'{"Nome":"Camisa Polo", "Preço":99.98}'
//https://jsonlint.com/
console.log(prod2)
