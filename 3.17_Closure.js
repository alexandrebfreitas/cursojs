"C L O S U R E . J S"
//Closure � o escopo criado quando uma fun��o � declarada
//Esse escopo permite a fun��o acessar e manipular vari�veis externas � fun��o

//Contexto l�xico em a��o!

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

//Portanto devido ao CLOSURE a fun��o tem mem�ria das suas origens
