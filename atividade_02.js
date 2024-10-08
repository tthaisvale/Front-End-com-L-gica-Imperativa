const pessoas = [
    { altura: 1.75, genero: 'Masculino' },
    { altura: 1.80, genero: 'Feminino' },
    { altura: 1.65, genero: 'Masculino' },
    { altura: 1.70, genero: 'Feminino' },
    { altura: 1.85, genero: 'Masculino' },
    { altura: 1.60, genero: 'Feminino' },
    { altura: 1.90, genero: 'Masculino' },
    { altura: 1.55, genero: 'Feminino' },
    { altura: 1.78, genero: 'Masculino' },
    { altura: 1.72, genero: 'Feminino' },
    { altura: 1.82, genero: 'Masculino' },
    { altura: 1.68, genero: 'Feminino' },
    { altura: 1.77, genero: 'Masculino' },
    { altura: 1.69, genero: 'Feminino' },
    { altura: 1.74, genero: 'Masculino' }
];

const alturas = pessoas.map(pessoa => pessoa.altura);
const maiorAltura = Math.max(...alturas);
const menorAltura = Math.min(...alturas);

const alturaMasculino = pessoas.filter(pessoa => pessoa.genero === 'Masculino').map(pessoa => pessoa.altura);
const mediaAlturaMasculino = alturaMasculino.reduce((a, b) => a + b, 0) / alturaMasculino.length;

const numeroFeminino = pessoas.filter(pessoa => pessoa.genero === 'Feminino').length;

console.log('Maior altura do grupo:', maiorAltura);
console.log('Menor altura do grupo:', menorAltura);
console.log('Média de altura do gênero Masculino:', mediaAlturaMasculino.toFixed(2));
console.log('Número de pessoas do gênero Feminino:', numeroFeminino);
