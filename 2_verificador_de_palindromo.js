function verificarPalindromo(palavra) {
    const palavraLimpa = palavra.replace(/\s+/g, '').toLowerCase();
    let invertida = '';

    for (let i = palavraLimpa.length - 1; i >= 0; i--) {
        invertida += palavraLimpa[i];
    }

    if (palavraLimpa === invertida) {
        return 'A palavra é um palíndromo.';
    } else {
        return 'A palavra não é um palíndromo.';
    }
}

const palavraUsuario = prompt('Digite uma palavra:');
const resultado = verificarPalindromo(palavraUsuario);
console.log(resultado);
