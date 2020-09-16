console.log(Math.ceil(6.1))
const obj1 = {}
obj1.nome = 'Bola'
// ou obj1['nome'] = 'Bola2'   (não é notação ponto mas funciona)
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Execc...')
    }
    //this torna o parâmetro visível fora do escopo da função
}
//ATRIBUINDO UMA 
const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
