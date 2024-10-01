function calculadora(num1, num2, operacao) {
    let resultado;

    if (operacao === 'soma') {
        resultado = num1 + num2;
    } else if (operacao === 'subtracao') {
        resultado = num1 - num2;
    } else if (operacao === 'multiplicacao') {
        resultado = num1 * num2;
    } else if (operacao === 'divisao') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            return 'Erro: Divisão por zero';
        }
    } else {
        return 'Erro: Operação inválida';
    }

    return resultado;
}

console.log(calculadora(10, 5, 'soma'));   
console.log(calculadora(10, 5, 'subtracao'));
console.log(calculadora(10, 5, 'multiplicacao'));
console.log(calculadora(10, 5, 'divisao')); 
console.log(calculadora(10, 0, 'divisao'));
console.log(calculadora(10, 5, 'modulo'));


