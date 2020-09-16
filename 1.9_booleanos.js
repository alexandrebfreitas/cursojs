isAtivo = true
console.log(isAtivo)
isAtivo = 1
console.log(!isAtivo) // deverá dar false
// USE "!!" em java serve para negar duas vezes
// Com isso seu valor será convertido em booleano
console.log("Valores Verdadeiros")
//números diferentes de zero
console.log(!!1)
console.log(!!-1)
//strings
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
//qualquer um dos mensionados
console.log(!!(isAtivo = Infinity))

console.log('OS FALSOS')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('pra finalizar...')
console.log(!!('' || null || 0 || ''))

let none = 'Lucas'
// pode ser usado retornar uma mensagem (muito usado em js)
console.log(nome || 'Desconhecido')