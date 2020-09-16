//Armazenando uma funcao em uma variavel
//Funcao anonima
const imprimirSoma = function(a,b){
    console.log(a+b)
  }
  imprimirSoma(2,3)
  
  //Armazenando uma funcao arrow em uma variável
  //substitui a funcao anonima
  const soma = (a,b) =>{
    return a+b
  }
  console.log(soma(2,3))
  
  //retorno impricito
  const subtracao = (a,b) => a-b
  console.log(subtracao(9,2))
  
  const imprimir2 = a => console.log(a)
  imprimir2("topzera")