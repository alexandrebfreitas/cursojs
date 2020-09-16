 const pessoa ={
   saudacao: "bom dia!",
   falar(){
     console.log(this.saudacao)
   }
 }
 pessoa.falar()
 const falar = pessoa.falar
 falar() //conflito entre paradigmas: funcional e OO

 const falardepessoa = pessoa.falar.bind(pessoa)
 falardepessoa()
 //BIND é o método responsavel por amarrar o objeto à função que será executada
 