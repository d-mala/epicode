// Crea programmaticamente, utilizzando JS, un tabellone per la Tombola formato da 90 celle, numerate con i numeri da 1 a 90 (10 x 9).

// Crea un bottone per simulare l'estrazione di un numero: dovra selezionare un numero random da 1 a 90.

// Dopo il click del bottone, evidenza in qualche modo la cella corrispondente sul tabellone (quella con lo stesso numero), ad esempio cambiandone il colore di sfondo.

// Mantieni evidenziate le celle corrispondenti ai numeri precedentemente estratti dopo ogni nuova estrazione.

//Fai in modo che non sia possibile richiamare un numero già precedentemente estratto.

// In aggiunta al tabellone, crea per il giocatore una tabellina da 15 celle (5 x 3), con numeri random da 1 a 90, che si comporterà come il tabellone principale (evidenziando i numeri estratti).

// Permetti all'utente di selezionare il numero di tabelline con le quali intende giocare, e generale a schermo prima dell'inizio della partita.


const tabellone = document.querySelector('#tabellone');
const btnRandomNumber = document.querySelector('#btnRandomNumber');
const displayNumber = document.querySelector('#displayNumber');
const inputNumberCartelline = document.querySelector('#inputNumberCartelline');
const btnCreateCartelline = document.querySelector('#btnCreateCartelline');
const generatedNumbers = [];

window.addEventListener('load', init);
function init() {
    generateTabellone();
    btnRandomNumber.addEventListener('click', numberGen);
    btnCreateCartelline.addEventListener('click', createCartelline);
}


function generateTabellone() {
    for (let i = 0; i < 90; i++) {
        const cella = document.createElement('div');
        cella.classList.add('cella');
        const numero = document.createElement('h4');
        numero.innerText = i + 1;
        cella.append(numero);
        tabellone.append(cella);
    }
}

function numberGen() {
    if (generatedNumbers.length >= 90) {
        btnRandomNumber.setAttribute('disabled', 'true');
        return;
    } else {
        const randomNumber = Math.floor(Math.random() * 90) + 1;
        console.log(randomNumber);
        displayNumber.innerText = `Il numero estratto é ${randomNumber}`;
        if (!generatedNumbers.includes(randomNumber)) {
            generatedNumbers.push(randomNumber);
            const cella = document.querySelector(`.cella:nth-child(${randomNumber + 1})`);
            cella.style.backgroundColor = 'red';
            cella.style.color = 'white';
        } else {
            numberGen();
        }
    }
}


function createCartelline() {
    
}