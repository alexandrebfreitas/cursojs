function rand({min = 0, max = 1000 }){
  const valor = Math.random()*(max-min)+min
  return Math.floor(valor)
}
const obj = {max:50,min:40}
//{} é o operador destructuring
console.log(rand(obj))
console.log(rand(obj))

console.log(rand({min:955})) //passar valor de min e max
// veja que os máximos e minimos já estão definidos na definição da função
console.log(rand{})//objeto vazio
