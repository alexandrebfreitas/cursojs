 const nome = 'rebca'
 const concatenacao = 'olá'+nome+'!'

 const tamplate = `
 Olá
 ${nome}!`// é necessário usar crase e ${}
 console.log(concatenacao,template)
 

 //exemplo usando expressões
 console.log(`1+1= ${1+1}`)

 const up = texto => texto.toUpperCase()
 console.log(`Ei... ${up('cuidado')}!`)
