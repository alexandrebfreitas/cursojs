//Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e){
  // 'e' � um evento qualquer
  console.log('O evento ocorreu!')
}
//COM ISSO A CALLBACK SERA REGISTRADA, mas n�o sera chamada
//Somente quando o evento (e) ocorrer ir� retornar a fun��o com a mensagem.
//Para resetar o CALLBACK resete a pagina e assim o html ir� resetar
