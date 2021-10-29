//Ref
const resoult = document.querySelector('.resoult');
//Immissione di una parola da parte dell'utente
const userWord = prompt('Inserisci una parola che credi sia palindroma').trim().toLowerCase();

console.log('Parola utente ' + userWord);

const reversWord = reverseChars(userWord);
console.log('Parola utente al contrario ' + reversWord);
//Function per riscrivere la parola al contrario
function reverseChars(word) {
    let reverse = '';

    for (let i = (word.length - 1); i >= 0; i--) {
        reverse += word[i];
    }

    return reverse;
}
//Check se è PALINDROMA
if (reversWord !== userWord) {
    //Output del risultato se è o non è palindroma la parola inserita
    resoult.innerHTML = (`La parola inserita NON è palindroma, ${userWord} al contrario è ${reversWord}.`);
    console.log(`La parola inserita NON è palindroma, ${userWord} al contrario è ${reversWord}.`);
} else {
    //Output del risultato se è o non è palindroma la parola inserita
    resoult.innerHTML = (`La parola inserita è palindroma, ${userWord} al contrario è ${reversWord}.`);
    console.log(`La parola inserita è palindroma, ${userWord} al contrario è ${reversWord}.`);
}