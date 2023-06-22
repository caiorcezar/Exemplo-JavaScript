//estrutura de Laço com while


const listaDeDestinos = new Array(
    'São Paulo',
    'Paraná',
    'Rio de Janeiro',
    'Espirito Santo',
    'Santa Catarina',
    'Bahia',
    'Pernambuco'
)
console.log(listaDeDestinos.length)

const destinoDesejado = 'Pernambuco'

//console.table(listaDeDestinos)
//console.log(listaDeDestinos[1])



/* while(condição){

    Ação(IF)

 indice ++
} */

let indice = 0

let encontrouDestino = false

while(indice < listaDeDestinos.length){
    if(listaDeDestinos[indice] == destinoDesejado){
        //console.log('Destino Encontrado!')
        encontrouDestino = true
        break
    }else{
        //console.log('Destino Não Encontrado!')
        encontrouDestino = false
    }
    indice ++
}
if(encontrouDestino){
    console.log('Destino Encontrado')
}else{
    console.log('Destino NÃO encontrado')
}



/* const multiplicador = 7
let contador  = 1

while (contador <= 10){
    console.log(multiplicador * contador)

    contador ++
} */