// JSnack2
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


//GENERAZIONE ARRAY CON INDICE RANDOM E CON NUMERI RANDOM
const randomNumbers = [];
const indexRandomNumber = Math.floor(Math.random() * 10 + 1); // da 1 a 10

for (i = 0; i < indexRandomNumber; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  randomNumbers[i] = randomNumber;
  //console.log(RandomNumbers[i]);
}
// FINE GENERAZIONE


// VEDO COME MI RESTITUISCE randomNumbers -> debug
console.log(randomNumbers);

// PRENDO I DUE DIV DAL IL LORO ID E LE METTO NELLE LORO CONST
const divRed = document.getElementById("red");
const divGreen = document.getElementById("green");

// CAMBIO LO STYLE AI DUE DIV
divGreen.style.color = "green";
divRed.style.color = "red";

for(i = 0; i < randomNumbers.length; i++){
    //SE IL NUMERO DELL'ARRAY IN POSIZIONE DI I DA RESTO 0
    if (randomNumbers[i] % 2 == 0){
        //AGGIUNGO ALL'HTML DI divGreen CON UN TEMPLETA LITERAL, LA POSIZIONE DI I E IL NUMERO
        divGreen.innerHTML += `posizione i: ${i} numero: ${randomNumbers[i]} <br>`;
    }
    //ALTRIMENTI SE NON DA RESTO 0 FACCIO LA STESSA COSA MA CAMBIO DIV, LI AGGIUNGO A divRed
    else{
        divRed.innerHTML += `posizione i: ${i} numero: ${randomNumbers[i]} <br>`;
    }
}