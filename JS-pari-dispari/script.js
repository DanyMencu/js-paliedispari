//Ref
const resoultText = document.querySelector('.resoult');

// Richiesta all'utente di scegliere tra pari e dispari
let userChoice = prompt('Scegli pari o dispari?').trim().toLowerCase();

// Check della scelta del giocatore tra PARI e DISPARI
while (userChoice !== 'pari' && userChoice !== 'dispari') {
    userChoice = prompt('Scegli pari o dispari?');
}

// Richiesta scelta tra 1 e 5
let userNumber = prompt('Scegli un numero da 1 a 5?');

// Check dell'inserimento corretto del numero scelto dall'utente
while ( isNaN(userNumber) || userNumber < 1 || userNumber > 5 ) {
    userNumber = prompt('Scegli un numero da 1 a 5?');
}

// Fornire al computer un numero random sempre tra 1 e 5
const computerNumber = randomNumber (1, 5);

// Sommare i due numeri fornmiti e verifica se è pari o dispari
let resoult = oddEven (userNumber , userNumber)

// Calcolare chi vince in base alla scelta iniziale fatta dal giocatore (PARI/DISPARI)
if (userChoice === resoult) {
    resoultText.innerHTML = (`Hai battuto il computer i dadi erano ${userChoice}`);
}
else {
    resoultText.innerHTML = (`Hai perso il risultato dei dadi era ${resoult}`);
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