// Richiesta all'utente di scegliere tra pari e dispari e tra un numero compreso tra 1 e 5
let userChoice = prompt('Scegli pari o dispari?');

// Check della scelta del giocatore tra PARI e DISPARI
while (userChoice !== 'pari' && userChoice !== 'dispari') {
    userChoice = prompt('Scegli pari o dispari?');
}

let userNumber = prompt('Scegli un numero da 1 a 5?');
// Check dell'inserimento corretto del numero scelto dall'utente
while ( isNaN(userNumber) || userNumber < 1 || userNumber > 5 ) {
    userNumber = prompt('Scegli un numero da 1 a 5?');
}
console.log('Le tue scelte sono ' + userChoice , userNumber);

// Fornire al computer un numero random sempre tra 1 e 5
const computerNumber = randomNumber (1, 5);
console.log('Il numero random del computer è ' + computerNumber);

// Sommare i due numeri fornmiti e verifica se è pari o dispari
let resoult = oddEven (userNumber , userNumber)
console.log('La somma dei numeri scelti è ' + resoult);

// Calcolare chi vince in base alla scelta iniziale fatta dal giocatore (PARI/DISPARI)
if (userChoice === resoult) {
    console.log(`Hai battuto il computer il risultato era ${userChoice}`);
} else {
    console.log(`Hai perso il risultato era ${resoult}`);
}

//Funzioni
function randomNumber (min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

function oddEven (num1 , num2) {
    if ( (num1 + num2) % 2 === 0) {
        finding = 'pari';
    }
    else {
        finding = 'dispari';
    }

    return finding;
}