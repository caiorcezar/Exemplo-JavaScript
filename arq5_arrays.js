//Trabalhando com Arrays

const cidades = new Array(
   'São Paulo',
   'Cotia',
   'Itapevi',
   'Carapicuíba' 
)

cidades.push('Osasco', 'Vargem Grande')//O método push() adiciona elementos ao Array
cidades.splice(2,1)//O método splice() remove elementos do Array




console.log(typeof(cidades))
console.table(cidades)
console.log(cidades[1])//exibe só o elemento de índice 1 do array cidades

