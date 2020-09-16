"MEU MODO" //Com valor padrão de desconto
/*  
function criarProduto(name,preco,desconto=10){
  return{
    produto:name,
    preço:preco,
    desconto
  }
}
console.log(criarProduto("Paçoca",10))
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