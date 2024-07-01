// Chiedi un numero di 4 cifre all'utente
let number = prompt("Inserisci un numero di 4 cifre:");

// Verifica che il numero sia di 4 cifre
if (number.length !== 4) {
    console.log("Per favore, inserisci un numero valido di 4 cifre.");
} else {
    // Dividi il numero in singole cifre
    let digits = number.split('');
    // Calcola la somma delle cifre
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }
    document.getElementById('final-sum').innerHTML = 'La somma è : ' + sum
}
