import { inicializarCarrinho } from "./src/menuCarrinho";

const catalogo = [
    {
        id: 1,
        nome: "Planfleto",
        Modelo: "Montamos sua arte",
        preco: 40,
        nomeArquivoImagem: "3.png",
    },
    {
        id: 2,
        nome: "Criação de Logos",
        Modelo: "Montamos sua arte",
        preco: 80,
        nomeArquivoImagem: "4.png",
    },
    {
        id: 3,
        nome: "Criação de Adesivos",
        Modelo: "Montamos sua arte",
        preco: 40,
        nomeArquivoImagem: "5.png",
    },
    {
        id: 4,
        nome: "Convite virtual",
        Modelo: "Montamos sua arte",
        preco: 45,
        nomeArquivoImagem: "8.png",
    },
    {
        id: 5,
        nome: "certificados e diplomas",
        Modelo: "Para suas Redes Sociais",
        preco: 30,
        nomeArquivoImagem: "7.png",
    }
];

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-dashed border-2 border-indigo-600 w-56 m-2" id="card-produto-${produtoCatalogo.id}">
        <img 
            src="JA/${produtoCatalogo.nomeArquivoImagem}" 
            alt="produto 1 jhow artes."
            style="height: 300px;"
        />
        <p class="marca"> ${produtoCatalogo.Modelo}</p>
        <p> ${produtoCatalogo.nome}</p>
        <p> R$${produtoCatalogo.preco}</p>
        <button>Adicionar</button>
    </div>`;

    document.getElementById('container-produto').innerHTML += cartaoProduto;
}

inicializarCarrinho();
