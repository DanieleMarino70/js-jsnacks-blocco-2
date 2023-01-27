// JSnack con i tutor
// Dato un array contenente i risultati di una squadra (vittorie, pareggi e sconfitte)
// [W, W, L, X, X, W, L, X], stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.

const matchesResults = ["W", "W", "L", "X", "X", "W", "L", "X"];
let won = 0;
let lost = 0;
let draw = 0;

for (let i = 0; i < matchesResults.length; i++) {

    if (matchesResults[i] == "W") {
      won++;
      console.log(`la ${i + 1}° squadra ha vinto!`);
    } else if (matchesResults[i] == "L") {
      lost++;
      console.log(`la ${i + 1}° squadra ha perso!`);
    } else {
      draw++;
      console.log(`la ${i + 1}° squadra ha pareggiato!`);
    } 

}

console.log("-----------------------------");
console.log("squadre che hanno vinto: " + won);
console.log("squadre che hanno pareggiato: " + draw);
console.log("squadre che hanno perso: " + lost);