// Crea un array vuoto
let oddNumbers = [];

// Chiedi per 6 volte all'utente di inserire un numero
for (let i = 0; i < 6; i++) {
    let number = prompt("Inserisci un numero:");

    // Verifica se il numero è dispari
    if (number % 2 !== 0) {
        // Inserisci il numero dispari nell'array
        oddNumbers.push(number);
    }
}

document.getElementById('odd-numbers').innerHTML = oddNumbers