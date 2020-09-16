const notas = [6.7,7.4,9.4,1.2,3.2,1.1]
for(i in notas){
  console.log(i,notas[i])
}
const pessoa = {
  nome: 'Ana',
  sobrenome:'Silva',
  idade:29,
  peso:64
}
for(atributo in pessoa){
  console.log(atributo,'=',pessoa[atributo])
}
