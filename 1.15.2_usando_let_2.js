const funcs=[]
for (var i= 0;i<10;i++){
  funcs.push(function(){
    console.log(i)
  })
}
funcs[2]()// da 10
funcs[8]()// da 10 pois i = 0 é um var que não tem escopo de funcao
