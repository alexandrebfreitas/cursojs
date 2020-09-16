function tratarErroELancar(erro){
  //throw new Error('...')
  //ou
  //throw 'Mensagem'
  throw{
     nome: erro.name,
     msg: erro.message,
     date: new Date
  }
}
function imprimirNomeGritado(obj){
  try{
    console.log(obj.name.toUpperCase()+'!!!')
  }
  catch(e){
    tratarErroELancar(e)
  }
  finally{
    console.log('final')
  }
}
const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)

//se vc escrever name ao inves de nome, não ira mais aparecer o erro.
//então com o erro é jogado para o catch que direciona pela função presente nele mandado para o throw.
