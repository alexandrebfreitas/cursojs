const notas = [7.7,7.1,8.9,4.5,9.0,3.4,5.4]
//Sem callback
let notasBaixas = []
for(let i in notas){
  if(notas[i]<7){
    notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas)

"AGORA USANDO CALLBACK"
notasBaixas2 = notas.filter(function(nota){
  return nota < 7
})
console.log(notasBaixas2)

"AGOrA USANDO ARROW + CALLBACK"
const notasBaixas3 = notas.filter(nota=>nota<7)
console.log(notasBaixas3)
//ou até
/*
const notasmenorque7 = nota=>nota<7
const notasBaixas3 = notas.filter(notasmenorque7)
console.log(notasBaixas3)
*/