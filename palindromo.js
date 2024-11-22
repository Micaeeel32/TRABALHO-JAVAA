function substituirLinhaPorZeros(matriz, numLinha) {
    if (numLinha >= 0 && numLinha < matriz.length) {
        for (let i = 0; i < matriz[numLinha].length; i++) {
            matriz[numLinha][i] = 0;
        }
    }
    return matriz;
}

// Exemplo de uso:
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const numLinha = 0;
console.log(substituirLinhaPorZeros(matriz, numLinha));
// Saída esperada: [[1, 2, 3], [0, 0, 0], [7, 8, 9]]