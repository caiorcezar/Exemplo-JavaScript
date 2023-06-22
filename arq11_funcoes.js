//Declaração e execução de funções



//Declarar Função
/* function nomeFuncao (parâmetros){

    Ação da função

    retorno
} */

//Executar Função declarada

//nomeFuncao(parâmetros)


function escreveTexto (texto){
    console.log(texto)
}

//escreveTexto("Bom dia Pessoal")

function soma (){
    return 5 + 3
}

//escreveTexto(soma())

function soma2 (n1, n2){
    return n1 + n2
}

//escreveTexto(soma2(9, 5))

function divisao (n1, n2){
    return n1 / n2
}
escreveTexto(divisao(9,3))

//escreveTexto(divisao(3,9))
escreveTexto(divisao(3,9).toFixed(2))
escreveTexto(typeof(divisao(3,9).toFixed(2)))