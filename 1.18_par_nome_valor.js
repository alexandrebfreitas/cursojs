//par nome/valor
const saudacao = 'Salvi' //contexto léxico 1
//contexto lexico: quando definimos constante dentro de funções
//obs: a constante só pode ser definida UMA ÚNICA VEZ  no mesmo contexto léxico, portanto não poderia ser reatribuida à uma outra frase exemplo: const saudacao = "iae"
function exec(){
    const saudacao = "Falaa" //contexto léxico 2
    return saudacao
}
//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade:10,
    peso:50,
    endereco:{
        logradouro:'Rua top',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.endereco)

