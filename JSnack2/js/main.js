// JSnack2
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.



const randomNumbers = [];
const indexRandomNumber = Math.floor(Math.random() * 10 + 1); // da 1 a 10

for (i = 0; i < indexRandomNumber; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  randomNumbers[i] = randomNumber;
  //console.log(RandomNumbers[i]);
}

console.log(randomNumbers);

const divRed = document.getElementById("red");
const divGreen = document.getElementById("green");
divGreen.style.color = "green";
divRed.style.color = "red";

for(i = 0; i < randomNumbers.length; i++){
    if (randomNumbers[i] % 2 == 0){
        divGreen.innerHTML += `posizione i: ${i} numero: ${randomNumbers[i]} <br>`;
    }
    else{
        divRed.innerHTML += `posizione i: ${i} numero: ${randomNumbers[i]} <br>`;
    }
}