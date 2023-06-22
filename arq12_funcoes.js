//A função deve receber uma nota e retornar:
// => Aprovado se a nota for maior ou igual a 70
// => Recuperação se a nota for maior ou igual a 50
// => Reprovado se a nota for menor que 50

const nomeAluno = 'Marivaldo'
const notaAluno = 70

function avaliaNota(nota, nome) {
    if (nota >= 70) {
        return `${nome} está APROVADO`
    } if (nota >= 50) {
        return `${nome} está de RECUPERAÇÂO`
    } else {
        return `${nome} está REPROVADO`
    }
}

//console.log(avaliaNota(notaAluno, nomeAluno))

//A função deve receber um Array de nomes e um nome específico e 
//verificar se este nome consta no Array

const listaNomes = new Array(
    "João",
    "Maria",
    "Carlos",
    "Carla",
    "Ricardo"
)
const nomeProcurado = "Carlos"

function procuraNome(lista, valorProcurado){
    let valorEncontrado = ""

    for(let i = 0; i < lista.length; i++){
        if(lista[i] == valorProcurado){
            valorEncontrado = true
            break 
        }else{
            valorEncontrado = false
        }
    }

    if(valorEncontrado == true){
        console.log('ENCONTRADO!')
    }else{
        console.log('NÃO ENCONTRADO')
    }
}

procuraNome(listaNomes, nomeProcurado)