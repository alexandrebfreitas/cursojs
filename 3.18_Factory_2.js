"MEU MODO" //Com valor padr�o de desconto
/*  
function criarProduto(name,preco,desconto=10){
  return{
    produto:name,
    pre�o:preco,
    desconto
  }
}
console.log(criarProduto("Pa�oca",10))
console.log(criarProduto("Dadinho",5))
*/
"MODO DO PROFESSOR"
function criarProduto(nome,preco,){
  return{
    nome,
    preco,
    desconto:0.1
  }
}
console.log(criarProduto("Dadinho",5))
console.log(criarProduto("Dadinho",5))