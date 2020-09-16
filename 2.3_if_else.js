const imprimirResultado = function(nota){
  if(nota>=7)
  {
    console.log('Aprovado!')
  }
  else
  {
    console.log('Reprovado!')
  }
}

imprimirResultado(1)
imprimirResultado(9)
imprimirResultado('Epa!') //cuidado pois é fracamente tipado!!!
