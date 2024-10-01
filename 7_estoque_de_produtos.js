const produtos = [
    { nome: 'Produto A', preco: 10.00, quantidade: 5 },
    { nome: 'Produto B', preco: 20.00, quantidade: 3 },
    { nome: 'Produto C', preco: 15.00, quantidade: 4 }
];

function calcularValorTotalEstoque(produtos) {
    let valorTotal = 0;

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        valorTotal += produto.preco * produto.quantidade; 
    }

    return valorTotal; 
}

const valorTotalEstoque = calcularValorTotalEstoque(produtos);
console.log(`O valor total do estoque é: R$ ${valorTotalEstoque.toFixed(2)}`);
