const lista = document.querySelector('.lista')
const inputTexto = document.querySelector('#input-texto')
const btnInsereLinha = document.querySelector('#btn-adiciona')

console.log(lista, inputTexto, btnInsereLinha)

//Criar uma linha
//pegar o valor do input texto
//Inserir o valor do input na linha
//Inserir a linha na lista (atribuir paternidade)


function adicionaLinha (){
    const linha = document.createElement('li')

    const textoDoInput = inputTexto.value

    linha.innerHTML = textoDoInput

    lista.appendChild(linha)    

}

btnInsereLinha.addEventListener('click', adicionaLinha)


//const nomeVariavel = valor