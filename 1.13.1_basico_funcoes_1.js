//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
  }
  imprimirSoma(2,3)
  imprimirSoma(2)
  imprimirSoma(2,10,4,5)// ignorou o resto
  imprimirSoma()
  //Funcao com retorno
  function soma(a,b=6){
    return a+b
  }
  console.log(soma(2,3))//Por padrão irá retornar um valor para b, porém eu posso redefinir b chamando um novo parametro
  console.log(soma(2))//retornara somente 2+b onde b já foi definido como 6 por padrão
  