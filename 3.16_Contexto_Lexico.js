"C O N T E X T O  L � X I C O"
const valor = 'Global'
function minhaFuncao(){//Contexto Lexico Global (CLG)
  console.log(valor)
}
function exec(){
  const valor = 'Local'
  minhaFuncao()
}
exec()