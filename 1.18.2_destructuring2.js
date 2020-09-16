 //USANDO DESESTRUTURAÇÃO DE DADOS COM ARRAY
 //DESTRUCTURING: desestruturação e atribuição
 const[a] =  [10]
 console.log(a)
 const[n1,,n3,,n5,n6=0] = [10,7,9,8]
 //observação:n5 está fora portanto é undefined
console.log(n1,n3,n5,n6) 


//aplicando a array 
cosnt [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota)