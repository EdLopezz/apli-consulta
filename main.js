
const pesquisaTexto = document.querySelector('#pesquisaTexto')
const resultado = document.querySelector('#resultado')


pesquisaTexto.addEventListener('click' , encontrarTexto)

function encontrarTexto(){
    let digiteTexto = document.querySelector('#digiteTexto')
    var texto = digiteTexto.value
    var textoAlto = texto.toUpperCase()     

    const produtos =  {
        'BATATA': 200, 
        'CEBOLA':300 , 
        'ALHO':400,
        'BANANA MAÇA':500, 
        'ALHO': 4868,
        

    }

    if(produtos[textoAlto] == undefined){
        alert('Produto não registrado ')
        
    }

    resultado.innerHTML = `Código do Produto (${texto}) : </br> ${produtos[textoAlto]}`
}