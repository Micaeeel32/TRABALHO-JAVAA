function contarVogais(frase) {
    let vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let char of frase) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    
    return contador;
}

// Exemplo de uso
let frase = "Olá, como você está?";
console.log(`Número de vogais: ${contarVogais(frase)}`); // Saída: Número de vogais: 8
