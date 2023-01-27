// JSnack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.


const userNumber = [];
const amountNumber = 8;

for (let i = 0; i < amountNumber; i++) {
  let chosenNumber = parseInt(prompt(`Scegli il ${i + 1}° numero`));
  userNumber[i] = chosenNumber;
}

for (let i = 0; i < amountNumber; i++){
  if (userNumber[i] % 2 == 0) {
    console.log(userNumber[i]);
    console.log("indice a: ", i);
    console.log("-----------------");
  } 
  else{
    if(userNumber[i + 1] !== undefined){
      console.log(userNumber[i + 1]);
      console.log("indice a: ", i + 1);
      i++;

    }
    else{
      break;
    }
  } 

}




  