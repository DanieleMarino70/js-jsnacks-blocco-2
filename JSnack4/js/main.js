// JSnack4 (Bonus)
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

// CREO DUE ARRAY VUOTI
const firstListNumbers = [];
const secondListNumbers = [];
// CREO DUE INDICI RANDOMICI
const indexFirstListNumber = Math.floor(Math.random() * 10 + 1); // da 1 a 10
const indexSecondListNumber = Math.floor(Math.random() * 10 + 1);
//GENERAZIONE DI NUMERI RANDOM AGLI ARRAY CON L'INDICE RANDOM
for (i = 0; i < indexFirstListNumber; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  firstListNumbers[i] = randomNumber;
}

for (i = 0; i < indexSecondListNumber; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  secondListNumbers[i] = randomNumber;
}
// FINE GENERAZIONE

// MOSTRO LE LISTE
console.log("La prima lista è composta da: ", firstListNumbers);
console.log("-------------------");
console.log("La seconda lista è composta da: ", secondListNumbers);


// SE IL PRIMO ARRAY E' PIU' LUNGO DEL SECONDO ALLORA
if (firstListNumbers.length > secondListNumbers.length) {
  // CREO UN CICLO DICENDO, CHE L'INDICE E' UGUALE ALLA LUNGHEZZA DEL SECONDO ARRAY
  // E CHIEDO SE L'INDICE E' MINORE DELLA LUNGHEZZA DEL PRIMO ARRAY ALLORA CONTINUO
  for (let i = secondListNumbers.length; i < firstListNumbers.length; i++) {
    //CREO LA CONST randomNumber, CHE VA DA 1 A 100, E LA INSERISCO IN secondListNumbers[i] 
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    secondListNumbers[i] = randomNumber;
  }

 } 
 //ALTRIMENTI (SE IL PRIMO ARRAY E' PIU' CORTO DEL SECONDO ALLORA)
 else {
  // CREO UN CICLO DICENDO, CHE L'INDICE E' UGUALE ALLA LUNGHEZZA DEL PRIMO ARRAY
  // E CHIEDO SE L'INDICE E' MINORE DELLA LUNGHEZZA DEL SECONDO ARRAY ALLORA CONTINUO
  for (let i = firstListNumbers.length; i < secondListNumbers.length; i++) {
    //CREO LA CONST randomNumber, CHE VA DA 1 A 100, E LA INSERISCO IN firstListNumbers[i]
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    firstListNumbers[i] = randomNumber;
  }
}



// RISTAMPO GLI ARRAY
console.log(firstListNumbers);
console.log("------------");
console.log(secondListNumbers);