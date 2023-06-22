const rectang = document.querySelector('.retangulo')
const botao = document.querySelector('.btn')



function mudaClasse (){
    rectang.classList.toggle('muda-cor')
}

botao.addEventListener('click', mudaClasse)