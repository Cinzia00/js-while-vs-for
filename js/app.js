console.log('ciclo while');

//Chiedere un numero all'utente
let numeroUtente = parseInt(prompt('Inserisci un numero'));
console.log('numero utente:', numeroUtente);

let numeriPari = numeroUtente % 2;
let numeriDispari = []


while (numeriDispari.length <= 10){
    numeroUtente = parseInt(prompt('Inserisci un numero'));     
    
    if (!isNaN(numeroUtente) && numeroUtente % 2 !== 0){
        numeriDispari.push(numeroUtente) 
    }
}

console.log(numeriDispari)