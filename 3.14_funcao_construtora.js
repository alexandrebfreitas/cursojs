//PODE CRIAR CONSTRUTORES A PARTIR DE CLASSES
//funcaoconstrutora.js
function Carro(velocidadeMaxima = 200, delta = 5){
  //atributo privado
  let velocidadeAtual = 0  
  'ENTENDI, ent�o significa que o atributo privado faz parte de cada objeto construido'


  //metodo publico
  this.acelerar = function(){  //Se voc� quiser criar uma fun��o privada substitua o "this." por const ou let 
    if(velocidadeAtual+delta<=velocidadeMaxima){
      velocidadeAtual+=delta
    }else{
      velocidadeAtual=velocidadeMaxima 
    }
  }
  "Como temos o this � um m�todo publico logo essa fun��o pode "
  
  //metodo publico
  this.getVelocidadeAtual = function(){
    return velocidadeAtual //atributo privado
  }
}
const uno = new Carro  //nao � obrigatoriamente necess�rio parenteses
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20) // fun��o construtora
//assim a fun��o construtora funciona como uma classe um molde
//
ferrari.acelerar()
ferrari.acelerar(),ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)


