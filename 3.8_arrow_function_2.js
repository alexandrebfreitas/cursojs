//arrowfunction2.js
function Pessoa(){
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  },5)
}
new Pessoa
"PORTANTO O THIS NAO VARIA EM ARROW FUNCTION"
