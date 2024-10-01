const pessoas = [];

for (let i = 0; i < 5; i++) {
    const nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    const idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`), 10); 

    pessoas.push({ nome, idade });
}

function exibirMaiorIdade(pessoas) {
    console.log("Pessoas com mais de 18 anos:");

    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i];

        if (pessoa.idade > 18) {
            console.log(pessoa.nome);
        }
    }
}

exibirMaiorIdade(pessoas);
