// numero fisso fine password

const anno = 22;

// Chiedere nome dell'utente

let nomeUtente = prompt('Come ti chiami?');

// Chiedere cognome all'utente

let cognomeUtente = prompt("Qual'è il tuo cognome?");

// Chiedere colore preferito

let colorePreferito = prompt("Qual'è il tuo colore preferito?");

//stampa password

document.getElementById('password').innerHTML = nomeUtente + cognomeUtente + colorePreferito + anno;