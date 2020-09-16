 /*
v e v -> v
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

!v -> f
!f -> v
*/
function compras(trabalho1, trabalho2){
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  const comprarTv32 = !!(trabalho1 != trabalho2)//para converter para boolean
  const manterSaudavel = !comprarSorvete
  return{
   sorvete:comprarSorvete,
   tv50: comprarTv50,
   tv32: comprarTv32,
   saudavel:  manterSaudavel}
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

