/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

console.log('ES. 1')

function area(l1,l2) {
    return l1 * l2;
}

console.log(area(6,5))


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log('ES. 2')

let num1 = 3;
let num2 = 6;

function crazySum(a, b) {
    if (a === b) {
        return ((a + b)*3);
    } else {
        return a + b;
    }
}

console.log(crazySum(num1, num2));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log('ES. 3')

let num3 = 4;

 function crazyDiff(a) {
    if (a > 19){
        return Math.abs(a - 19)*3;
    } else {
    return Math.abs(a - 19);
    }
 }

console.log(crazyDiff(num3));


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log('ES. 4')

let n = 100;

function boundary(n) {
    if (n > 20 && n <=100 || n === 400){
        return true;
    } else {
    return false;
    }
}

console.log(boundary(n));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(myString) {
    console.log(myString.indexOf('epicode'));
    if (myString.indexOf('epicode') === -1) {
        myString = 'epicode ' + myString;
        return myString;
    } else {
        return myString;
    }
}

console.log(epify('corso'));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log('ES. 6')

function check3and7(num) {
    if (num % 3 === 0) {
        console.log('il numero ' + num + ' è divisibile per 3');
    } else if (num % 7 === 0) {
        console.log('il numero ' + num + ' è divisibile per 7');
    } else {
        console.log('il numero ' + num + ' non è divisibile per 3 o 7');
    }
}

check3and7(15);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log('ES. 7')

function reverseString(myString) {
    return myString.split('').reverse().join('');
}

console.log(reverseString('epicode'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log('ES. 8')

function upperFirst(myString) {
    console.log('Input: ' + myString);
    let splittedArr = myString.split(' ');
    for (let i = 0; i < splittedArr.length; i++) {
        splittedArr[i] = splittedArr[i].charAt(0).toUpperCase() + splittedArr[i].slice(1);
    }
    let result = splittedArr.join(' ');
    console.log('Output: ' + result);
    return result;
}

upperFirst('ciao come stai?');


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log('ES. 9')

function cutString(myString) {
    return myString.slice(1, -1);
}

console.log(cutString('ciao come stai?'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log('ES. 10')

function giveMeRandom (n) {
    arrayRandom = [];
    for (let i = 0; i < n; i++) {
        arrayRandom[i] = Math.floor(Math.random() * 10) + 1;
    }
    return arrayRandom;
}

console.log(giveMeRandom(6));

