 //funcoes_anonimas.js
 'Criando uma variavel e uma fun��o anonima(sem nome)'
 const soma = function(x,y){
   return x+y
 }
 'Segunda fun��o anonima'
 const imprimirresultado = function(a,b,operacao = soma){
   console.log(operacao(a,b))
 }
 //por padr�o determinei que o terceiro parametro armazene a fun��o 'soma'
 //em seguida a operacao que ir� armazenar
 imprimirresultado(3,4)

 imprimirresultado(3,4,soma)
 imprimirresultado(3,4,function(x,y){
   return x-y
 })
imprimirresultado(3,4,(x,y)=>x*y)
const pessoa = {
  falar: function(){
    console.log('Opa')
  }
}
//OU
/*
const pessoa = {
  falar(){
    console.log('Opa')
  }
}
*/
pessoa.falar()
