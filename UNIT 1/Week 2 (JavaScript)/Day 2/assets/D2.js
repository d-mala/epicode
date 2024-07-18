/* ESERCIZIO 1
 * Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 */
console.log('ES.1')

let num1 = 8
let num2 = 8

if (num1 > num2) {
  console.log('il numero maggiore é ' + num1)
} else if (num2 > num1) {
  console.log('il numero maggiore é ' + num2)
} else {
  console.log('i due numeri sono uguali')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log('ES.2')

if (num1 !== 5) {
  console.log('not equal')
} else {
  console.log('equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

console.log('ES.3')

if (num1 % 5 === 0) {
  console.log(num1 + ' é divisibile per 5')
} else {
  console.log(num1 + ' non é divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log('ES.4')

if (
  num1 === 8 ||
  num2 === 8 ||
  num1 + num2 === 8 ||
  num1 - num2 === 8 ||
  num2 - num1 === 8
) {
  console.log('una delle condizioni é uguale a 8')
} else {
  console.log('nessuna delle condizioni é uguale a 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log('ES.5')

let totalShoppingCart = 30
let ShippingCost = 10
let checkout

if (totalShoppingCart >= 50) {
  checkout = totalShoppingCart
} else {
  checkout = totalShoppingCart + ShippingCost
}

console.log("l'utente deve pagare " + checkout + '€')

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log('ES.6')

let discount = 0.2

totalShoppingCart *= 1 - discount

if (totalShoppingCart >= 50) {
  checkout = totalShoppingCart
} else {
  checkout = totalShoppingCart + ShippingCost
}

console.log("con gli sconti l'utente deve pagare " + checkout + '€')

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 28
let b = 15
let c = 2

if (a > b && a > c) {
  if (b > c) {
    console.log(a, b, c)
  } else if (c > b) {
    console.log(a, c, b)
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(b, a, c)
  } else if (c > a) {
    console.log(b, c, a)
  }
} else {
  if (a > b) {
    console.log(c, a, b)
  } else {
    console.log(c, b, a)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arr = []

for (let i = 0; i < 10; i++) {
  arr[i] = i + 1
}
console.log(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr[arr.length - 1] = 100
console.log(arr)
