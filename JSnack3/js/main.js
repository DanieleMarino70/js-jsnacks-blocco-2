// JSnack3
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

const randomNumbers = [];
const indexRandomNumber = Math.floor(Math.random() * 10 + 1); // da 1 a 10
let somma = 0;

for (i = 0; i < indexRandomNumber; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  randomNumbers[i] = randomNumber;
  //console.log(randomNumbers[i]);
}

console.log(randomNumbers);

for (i = 0; i < randomNumbers.length; i++) {
  if (i % 2 != 0) {
    console.log("numero nella posizione: "[i]);
    somma = somma + randomNumbers[i];
  }
}

console.log("la somma è: " + somma);
