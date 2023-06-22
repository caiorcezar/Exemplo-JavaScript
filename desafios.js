const meuPeso = 70
const minhaAltura = 1.70

function calculaIMC(peso, altura){
    const IMC = peso / (altura * altura)
    
    if(IMC < 18.5){
        return "Baixo peso"
    }if(IMC < 25){
        return "Normal"
    }if(IMC < 30){
        return "Sobrepeso"
    }else{
        return "Obeso"
    }
}

console.log(calculaIMC(meuPeso, minhaAltura))


const n1 = 3
const n2 = 3

function comparaNumeros(valor1, valor2){

    if(valor1 > valor2){
        return `${valor1} é MAIOR que ${valor2}`
    }if(valor1 < valor2){
        return `${valor1} é MENOR que ${valor2}`
    }else{
        return `${valor1} é IGUAL a ${valor2}`
    }
}
console.log(comparaNumeros(n1, n2))
