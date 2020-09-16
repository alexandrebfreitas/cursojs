let valor //não inicializada
console.log(valor)
valor = null //ausência de valor
// Sempre use null para zerar um valor de uma variável para evitar problema de undefined
console.log(valor)


//CUIDADO
//console.log(valor.toString())
//RESPOSTA:   Cannot read property 'toString' of null

//===========================//
const prod = {}
console.log(prod.preço)
//RESPOSTAundefined para objetos criados mas sem atribuições 
//===========================//
//console.log(prod.preço.desconto)
//Dará ERRO!! Pois não tem como atribuir algo undefined
const produto ={}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.5
console.log(produto)
produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)//DEVERÁ RETORNAR FALSO POIS É UM UNEFINED
console.log(produto) // deverá ser undefined pois indefini o unico atributo do objeto

produto.preco =  null //sem valor atribuido
console.log(!!produto.preco) //DEVERÁ RETORNAR FALSO POIS É UM NULL