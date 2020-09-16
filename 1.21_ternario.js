//a primeira parte irá retornar caso seja verdadeiro
//a segunda parte irá retornar caso seja falso
const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

/*também é possivel usar a função arrow com corpo
const resultado = nota => {
  return nota >= 7 ? 'Aprovado': 'Reprovado'
}
*/
