const aluno = {
    nome: 'João', 
    notas: [8.5, 9.0, 7.5], 

    media: function() {
        let soma = 0;

        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }

        return soma / this.notas.length;
    }
};

const mediaAluno = aluno.media();
console.log(`O aluno ${aluno.nome} tem uma média de: ${mediaAluno.toFixed(2)}`);
