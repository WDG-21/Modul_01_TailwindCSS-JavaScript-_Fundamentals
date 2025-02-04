// FIND
// durchsucht das Array und gibt das erste Element zurück, das die angegebene Bedingung erfüllt.

// 1- Erstelle ein Array mit Zahlen
const numbers = [10, 20, 30, 40, 50];

// 2- Verwende die find-Methode, um die erste Zahl zu finden, die größer als 25 ist
const firstGreaterThan25 = numbers.find((num) => num > 25);
console.log(firstGreaterThan25);

// 3- Erstelle ein Array mit Objekten (Personen)
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];

// 4- Verwende die find-Methode, um die Person mit dem Namen "Charlie" zu finden
const personNamedCharlie = people.find((person) => person.name === 'Charlie');
console.log('Gefundene Person:', personNamedCharlie);
