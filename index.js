//Funzione per generare la password
function generapassword(lunghezza, minuscolo, maiuscolo, numeri, simboli){

const letminuscolo = `abcdefghijklmnopqrtuvwxyz`;
const letmaiuscolo = `ABCDEFGHIJKLMNOPQRTSUVWXYZ`;
const letnumeri = `1234567890`;
const letsimboli = `|!"£$%&/()=?^+*[]{}°#§-_.:,;€=`;

let caratteri = "";
let password = "";

caratteri += minuscolo ? letminuscolo : "";
caratteri += maiuscolo ? letmaiuscolo : "";
caratteri += numeri ? letnumeri : "";
caratteri += simboli ? letsimboli : "";

if(lunghezza <=0){
    return document.getElementById("pw").textContent = `Lunghezza password non valida, minimo 1 carattere`;
}
if(caratteri.length === 0){

    return document.getElementById("pw").textContent = `Devi selezionare almeno una categoria di caratteri`;

}
for(let i = 0; i < lunghezza; i++){
    const randompw = (Math.floor(Math.random() * caratteri.length));
    password += caratteri[randompw];
}

return document.getElementById("pw").textContent = `${password}`;
}


//Funzione la quale aggiorna la password ogni qual volta si effettua una modifica per quanto riguarda contenuto e lunghezza
function aggiornapassword() {
let lunghezza = lunghezzaInput.value;
let minuscolocheck = minuscolo.checked;
let maiuscolocheck = maiuscolo.checked;
let numericheck = numeri.checked;
let simbolicheck = simboli.checked;

generapassword(lunghezza, minuscolocheck, maiuscolocheck, numericheck, simbolicheck);
}

//Per rigenerare la password quando si preme il pulsante
document.getElementById("genera").onclick = aggiornapassword;

//Blocco di comandi per far sì che l'utente non può inserire un numero nell'input
const input = document.getElementById("lunghezza");

input.addEventListener('keydown', (e) => {
if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
    e.preventDefault();
}
});
//Fine del blocco

//dichiarazione costanti
const lunghezzaInput = document.getElementById("lunghezza");
const minuscolo = document.getElementById("mincheck");
const maiuscolo = document.getElementById("maicheck");
const numeri = document.getElementById("numcheck");
const simboli = document.getElementById("simcheck");

//Aggiunta eventi
lunghezzaInput.addEventListener("input", aggiornapassword);
minuscolo.addEventListener("change", aggiornapassword);
maiuscolo.addEventListener("change", aggiornapassword);
numeri.addEventListener("change", aggiornapassword);
simboli.addEventListener("change", aggiornapassword);

aggiornapassword();