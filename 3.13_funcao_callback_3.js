//Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e){
  // 'e' é um evento qualquer
  console.log('O evento ocorreu!')
}
//COM ISSO A CALLBACK SERA REGISTRADA, mas não sera chamada
//Somente quando o evento (e) ocorrer irá retornar a função com a mensagem.
//Para resetar o CALLBACK resete a pagina e assim o html irá resetar
