const fabricantes = ["Mercedes","Audi","BMW"]
function imprimir(nome,indice){
  console.log(indice+1,'.',nome)
}
"FUN��O CALLBACK"
//forEach � uma fun��o de fabricantes
//para cada elemento que ele encontrar dentro do array
//execute a fun��o imprimir 
fabricantes.forEach(imprimir)
"Ou da mesma forma"
fabricantes.forEach(function(fabricante){
  console.log(fabricante)
})
"Convertendo para arrow"
fabricantes.forEach(fabricante => console.log(fabricante)
)
//PORTANTO CALLBACK � UMA FUN��O QUE IR� EXECUTAR QUANDO UM EVENTO OCORRER
//NESSE CASO � CADA ELEMENTO NO ARRAY.
//PODE SER USADA EM UMA REQUISI��O AJAX.