//NOVO RECURSO DO ES2015

const pessoa = {
  nome:'Ana',
  idade:5,
  endereço:{
    logradouro:'Rua ABC',
    numero: 1000
  }
}
//DESTRUCTING é usado para criar variavel
const{nome,idade} = pessoa
console.log(nome,idade)

const{nome,idade} = pessoa
console.log(nome,idade)
//caso queira extrair e renomear a variavel
const{nome:n, idade:i} = pessoa
console.log(n,i)
//para que não imprima undefined com variaveis n definidas
const{sobrenome, bemHumorada = True} = pessoa
console.log(sobrenome, bemHumorada)
//Para estrair variável de dentro de outra variável
const{endereco:{logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)
