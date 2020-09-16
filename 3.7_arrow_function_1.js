let dobro = function(a){
  return 2*a
}

dobro = (a) => {
  return 2*a
}

dobro = a => 2*a // Return é implicito 1 linha
console.log(dobro(Math.PI))
"FUNÇÃO CLÁSSICA"
/*
let ola = function() {
  return 'Olá'
}
*/
"FUNÇÃO ARROW 1"
//ola = () => 'Olá'
"FUNÇÃO ARROW 2"
ola = _ => 'Olá' //possui um parametro
console.log(ola())

