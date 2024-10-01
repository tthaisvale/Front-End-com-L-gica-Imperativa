function gerarTabelaMultiplicacao(numero) {
    if (numero <= 0) {
        console.log("Por favor, insira um número positivo.");
        return; 
    }

    console.log(`Tabela de multiplicação do número ${numero}:`);

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

gerarTabelaMultiplicacao(5); 
