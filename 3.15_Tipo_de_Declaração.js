console.log(soma(3,4))
//console.log(sub(3,4))  //apresenta erro
//console.log(sub(3,4))  //apresenta erro
"T I P O S  D E  D E C L A R A Ç Ã O"

"FUNCTION DECLARATION"//permite que seja realizado o hosting
function soma(x,y){
  return x+y 
}

"FUNCTION EXPRESSION"//nao permite o hosting
const sub = function(x,y){
  return x - y
}

"NAMED FUNCTION EXPRESSION"//nao permite o hosting
const mult = function mult(x,y,){
  return x*y //só tem vantagem na hora de debuggar o codigo pois a função irá mostrar o nome
}

