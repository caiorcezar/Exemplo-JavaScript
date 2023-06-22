const paragrafos = document.querySelectorAll('.paragrafo')

console.log(paragrafos[1])

for(let i = 0; i < paragrafos.length; i++){
    paragrafos[i].style.color = 'blue'
    paragrafos[i].style.fontSize = '32px'
    paragrafos[i].style.fontWeight = '800'
}