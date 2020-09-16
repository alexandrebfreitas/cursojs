//Atribuição por Referência

const a = {name:'Teste'}
undefined
a
{name:"Teste"}
const b = a
undefined
/*
variável b e a apontam para um
mesmo endereço que a, portanto
se mudar a partir de b, o a também
muda, o contrario também é valido.
*/

//COPIA POR VALOR (Variáveis com VALORES INDEPENDENTES)
let c = 3
let d = c
d++

console.log(c,d) //deverá retornar valor idependente (3, 4)
//se fosse const retornariam mesmos valores, QUE É O CASO DOS OBJETOS
