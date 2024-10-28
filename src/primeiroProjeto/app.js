let botao =  document.querySelector("button")

botao.addEventListener("click", somarUm)

function somarUm(){
    let elementoH3= document.getElementById("valor")
    let valor =  parseInt(elementoH3.textContent);
    let novoValor = valor +1;
    elementoH3.textContent = novoValor
    let r = parseInt(Math.random()*256)
    let g = parseInt(Math.random()*256)
    let b = parseInt(Math.random()*256)
    if( novoValor >valor ){
        elementoH3.style.color = `rgb(${r}, ${g}, ${b})`
    }
}

