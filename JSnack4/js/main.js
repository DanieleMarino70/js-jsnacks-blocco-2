// JSnack4 (Bonus)
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


const firstListNumbers = [];
const secondListNumbers = [];
const indexFirstListNumber = Math.floor(Math.random() * 10 + 1); // da 1 a 10
const indexSecondListNumber = Math.floor(Math.random() * 10 + 1);
for (i = 0; i < indexFirstListNumber; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  firstListNumbers[i] = randomNumber;
}

for (i = 0; i < indexSecondListNumber; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  secondListNumbers[i] = randomNumber;
}

console.log("La prima lista è composta da: ", firstListNumbers);
console.log("-------------------");
console.log("La seconda lista è composta da: ", secondListNumbers);



if (firstListNumbers.length > secondListNumbers.length) {
  for (let i = secondListNumbers.length; i < firstListNumbers.length; i++) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    secondListNumbers[i] = randomNumber;
  }

 } else {
  for (let i = firstListNumbers.length; i < secondListNumbers.length; i++) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);  
    firstListNumbers[i] = randomNumber;
  }
}




console.log(firstListNumbers);
console.log("------------");
console.log(secondListNumbers);