// JSnack3
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

//GENERAZIONE NUMERI RANDOM CON INDICE RANDOM
const randomNumbers = [];
const indexRandomNumber = Math.floor(Math.random() * 10 + 1); // da 1 a 10


for (i = 0; i < indexRandomNumber; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  randomNumbers[i] = randomNumber;
  //console.log(randomNumbers[i]);
}
// FINE GENERAZIONE

//debug
console.log(randomNumbers);

let somma = 0;
for (i = 0; i < randomNumbers.length; i++) {
  // SE L'INDICE NON MI RESTITUISCE RESTO 0 ALLORA
  if (i % 2 != 0) {
    //DEBUG
    console.log("numero nella posizione: ", i);
    // A SOMMA AGGIUNGO SOMMA + IL NUMERO NELLA POSIZIONE I DELL'ARRAY
    somma = somma + randomNumbers[i];
  }
}

//STAMPO IL VALORE SOMMA
console.log("la somma è: " + somma);
