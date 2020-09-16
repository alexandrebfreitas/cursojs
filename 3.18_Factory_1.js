'METODO CONVENCIONAL'
const prod1 = {
  nome: '...',
  preco: 45
}
const prod2 = {
  nome: '...',
  preco: 45
}

'METODO FACTORY SIMPLES'
function criarPessoa(){
  return{
    nome:'Ana',
    sobrenome:'Silva'
  }
}
//Assim sempre que fizer a chamada
//irá criar uma estância de pessoa
"Portanto Função factor é uma função que retorna um Objeto!!!"
console.log(criarPessoa())
