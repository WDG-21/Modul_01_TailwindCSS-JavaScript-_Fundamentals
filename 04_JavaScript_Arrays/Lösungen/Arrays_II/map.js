// MAP
// Map geht durch jedes Element des Arrays.
// Erzeugt ein neues Array, das aus den Rückgabewerten der Callback-Funktion besteht.
// Das ursprüngliche Array wird nicht verändert, und das zurückgegebene kann andere Elemente als das ursprüngliche Array haben.

// 1- Erstelle ein Array namens numbers mit den Werten 1, 2, 3, 4, 5.
const numbersArray = [1, 2, 3, 4, 5];

// 2- Verwende die map-Methode, um ein neues Array mit verdoppelten Werten zu erstellen:
const doubledNumbers = numbersArray.map((num) => num * 2);
console.log(doubledNumbers);

// 3- Verwende die map-Methode, um ein neues Array mit Strings zu erstellen:
// a. Erstelle ein neues Array stringNumbers, in dem jeder Wert als String mit dem Präfix "Number: " gespeichert ist.

const stringNumbers = numbers.map((num) => 'Number: ' + num);
console.log(stringNumbers);

// map() iteriert über jedes Element im numbers-Array.
// Für jedes Element wird ein neuer String mit "Number: " davor erstellt.

// 4- Verwende die map-Methode, um ein neues Array mit Objekten zu erstellen:
// a- Erstelle ein neues Array numberObjects, in dem jedes Element ein Objekt mit den Eigenschaften original (die ursprüngliche Zahl) und squared (die quadrierte Zahl) ist.
const numberObjects = numbers.map((num) => ({
  original: num,
  squared: num * num,
}));

console.log(numberObjects);

// map() durchläuft das numbers-Array.
// Für jedes Element wird ein Objekt erstellt mit:
// original: Die ursprüngliche Zahl
// squared: Die quadrierte Zahl
// Diese Objekte werden in das neue Array numberObjects gespeichert.
