// JSnack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

//CREO UN'ARRAY VUOTO
const userNumber = [];
//QUANTE VOLTE CHIEDO ALL'UTENTE DI DARMI UN NUMERO
const amountNumber = 8;

for (let i = 0; i < amountNumber; i++) {
  //INSERISCO CON CHOSENNUMBER I VALORI DATI DALL'UTENTE ALL'ARRAY VUOTO
  let chosenNumber = parseInt(prompt(`Scegli il ${i + 1}° numero`));
  //SE IL NUMERO INSERITO NON E' UN NUMERO  DICI DI RICARICARE LA PAGINA E ROMPI IL CICLO
  if(isNaN(chosenNumber)){
    alert("Non è corretto, devi inserire il numero, ricarica la pagina");
    break;
    
  }//ALTRIMENTI CONTINUA
  else userNumber[i] = chosenNumber;
}

for (let i = 0; i < amountNumber; i++){
  //SE IL VALORE DELL'ARRAY IN INDICE I DA RESTO 0, LO STAMPO E DICO DOVE SI TROVA L'INDICE
  if (userNumber[i] % 2 == 0) {
    console.log(userNumber[i]);
    console.log("indice a: ", i);
    console.log("-----------------");
  } 
  //ALTRIMENTI
  else{
    //SE IL VALORE DELL'ARRAY IN INDICE SUCCESSIVO NON E' UGUALE A INDEFINITO, 
    //ALLORA STAMPO IL VALORE DELL'ARRAY IN INDICE SUCCESSIVO E DICO DOVE SI TROVA L'INDICE E INCREMENTO L'INDICE
    if(userNumber[i + 1] !== undefined){
      console.log(userNumber[i + 1]);
      console.log("indice a: ", i + 1);
      i++;

    }
    //ALTRIMENTI ESCO DAL FOR
    else{
      break;
    }
  } 

}




  