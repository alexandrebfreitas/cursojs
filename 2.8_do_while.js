function getinteiroentre(min,max){
  const valor = Math.random()*(max-min)+min
  return Math.floor(valor)
}
let opcao = -1
do {
  opcao = getinteiroentre(-1,10)
  console.log('opcao escolhida foi'+opcao)
}while(opcao != -1)
console.log('Fim')
//do {} while(condicao) serve para primeiro executar depois verificar
//isso evitar a criação de if

