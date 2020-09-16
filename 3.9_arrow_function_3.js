//arrowfunction3.js
"TOME CUIDADO POIS DENTRO DE FUNÇÃO O THIS ESTA NO ESCOPO GLOBAL"
"COMPARADO COM ARROW FUNCTION O THIS NAO TEM ESSE PROBLEMA"
let comparacomthis = function(param){
  console.log(this===param)
}
comparacomthis(window)//quandor for no NODE substitua 'window' por 'global'
const obj = {}
comparacomthis = comparacomthis.bind(obj)
comparacomthis(window)
comparacomthis(obj)

//TENTANDO USAR ARROW VEMOS QUE O THIS NAO VARIA COM O CONTEXTO
let comparacomthisarrow = param => console.log(this ===param)
comparacomthisarrow(window)
comparacomthisarrow()

//tentando mudar a referencia do this com BIND em uma FUNÇÃO ARROW
comparacomthisarrow = comparacomthisarrow.bind(obj)
comparacomthisarrow (obj)
//PORTANTO NAO MUDA
//ENTAO POR REGRA O THIS APONTA PARA O CONTEXTO EM QUE A FUNÇÃO FOI CRIADA
