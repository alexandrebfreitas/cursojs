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
//ir� criar uma est�ncia de pessoa
"Portanto Fun��o factor � uma fun��o que retorna um Objeto!!!"
console.log(criarPessoa())
