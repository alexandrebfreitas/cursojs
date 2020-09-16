"C L O S U R E . J S"
//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto léxico em ação!

const x = 'Global'
function fora(){
  const  x = 'Local'
  function dentro(){
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

//Portanto devido ao CLOSURE a função tem memória das suas origens
