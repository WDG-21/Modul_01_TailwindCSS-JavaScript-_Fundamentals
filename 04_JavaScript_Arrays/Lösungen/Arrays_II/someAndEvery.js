// SOME
// Some Methode überprüft, ob mindestens ein Element im Array die angegebene Bedingung erfüllt.
// Gibt true zurück, wenn mindestens ein Element die Bedingung erfüllt, andernfalls false

// EVERY
// Every Methode überprüft, ob alle Elemente im Array die angegebene Bedingung erfüllen.
// Gibt true zurück, wenn alle Elemente die Bedingung erfüllen. Sonst false.

// 1- Erstelle ein Array mit Zahlen
const numbers = [4, 8, 15, 16, 23, 42];

// 2- Verwende die some-Methode, um zu prüfen, ob es eine Zahl gibt, die größer als 20 ist
const hasNumberGreaterThan20 = numbers.some((num) => num > 20);
console.log(hasNumberGreaterThan20);

// 3- Verwende die every-Methode, um zu prüfen, ob alle Zahlen kleiner als 50 sind
const allNumbersLessThan50 = numbers.every((num) => num < 50);
console.log(allNumbersLessThan50);

// 4- Erstelle ein Array mit Objekten (Studenten)
const students = [
  { name: 'Alice', age: 25, passed: true },
  { name: 'Bob', age: 22, passed: false },
  { name: 'Charlie', age: 27, passed: true },
  { name: 'David', age: 20, passed: true },
];

// 5- Verwende die some-Methode, um zu prüfen, ob mindestens ein Student nicht bestanden hat
const hasFailedStudents = students.some((student) => student.passed === false);
console.log(hasFailedStudents);

// 6- Verwende die every-Methode, um zu prüfen, ob alle Studenten älter als 18 sind
const allStudentsOlderThan18 = students.every((student) => student.age > 18);
console.log(allStudentsOlderThan18);
