const fabricantes = ["Mercedes","Audi","BMW"]
function imprimir(nome,indice){
  console.log(indice+1,'.',nome)
}
"FUNÇÃO CALLBACK"
//forEach é uma função de fabricantes
//para cada elemento que ele encontrar dentro do array
//execute a função imprimir 
fabricantes.forEach(imprimir)
"Ou da mesma forma"
fabricantes.forEach(function(fabricante){
  console.log(fabricante)
})
"Convertendo para arrow"
fabricantes.forEach(fabricante => console.log(fabricante)
)
//PORTANTO CALLBACK É UMA FUNÇÃO QUE IRÁ EXECUTAR QUANDO UM EVENTO OCORRER
//NESSE CASO É CADA ELEMENTO NO ARRAY.
//PODE SER USADA EM UMA REQUISIÇÃO AJAX.