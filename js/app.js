console.log('ciclo while');

//Chiedere un numero all'utente
let numeroUtente = parseInt(prompt('Inserisci un numero'));
console.log('numero utente:', numeroUtente);

let numeriPari = numeroUtente % 2;
let numeriDispari = []


while (numeriDispari <= 10){
    
    if (isNaN(numeroUtente) || numeroUtente % 2 === 0){
        let numeroUtente = parseInt(prompt('Inserisci un numero'));     
    }else (numeroUtente === numeriDispari)
    numeriDispari.push(numeroUtente) 
}








// while (isNaN(numeroUtente) || numeroUtente % 2 === 0) {
//     numeroUtente = parseInt(prompt('Inserisci un numero'));
//     console.log(numeroUtente)

//     if (numeriDispari[i] <= 10){

//     }
//     console.log('numero dispari', numeriDispari)
// }


console.log(numeriDispari)