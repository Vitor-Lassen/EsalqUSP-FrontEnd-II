let endpoint = "https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json"

let produtos= []
let elementoParaInserirProdutos = document.getElementById("produtos__lista")
buscarProdutosApi()

async function buscarProdutosApi(){
    let res = await fetch(endpoint)
    produtos = await res.json()
    console.table(produtos)
    exibirProdutos(produtos)
}

function exibirProdutos(produtos){
    produtos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML+= `    
                <li class="produtos__item">
                    <div class="produtos__content">
                        <img src="${produto.img}" alt="Imagem de ${produto.img}">
                        <div class="produtos__informacoes">
                            <h3>${produto.nome}</h3>
                            <p>${produto.descricao}
                            </p>
                            <h4>R$ ${produto.valorSemDesconto}<s>R$ ${produto.valorComDesconto}</s></h4>
                            <p>${produto.tipoEntrega}</p>
                        </div>
                    </div>
                </li>`
    });
}