//DIFERENÇAS ENTRE FUNÇÕES E OBJETOS

//CRIANDO ESTANCIA DE OBJETO A PARTIR DE:

//1) FUNÇÕES PADRÃO DA API:
console.log(typeof Object)
console.log(typeof new Object)
//2)FUNCÕES DEFINIDAS PELO USUÁRIO:
const Cliente  =function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)
//3) CLASSES:
class Produto{} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

