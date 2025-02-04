// FILTER
// •	Erstellt auch ein neues Array mit allen Elementen, die aber auf eine Bedingung achten, die wir in Callback definieren.

// 1- Erstelle ein Array mit Zahlen
const numbers = [5, 10, 15, 20, 25, 30];

// 2- Verwende die filter-Methode, um alle Zahlen größer als 15 in ein neues Array zu speichern
const numbersGreaterThan15 = numbers.filter((num) => num > 15);
console.log(numbersGreaterThan15);

// 3- Erstelle ein Array mit Objekten (Studenten)
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 88 },
  { name: 'Eve', grade: 95 },
];

// 4- Verwende die filter-Methode, um alle Studenten mit einer Note über 80 zu finden
const studentsAbove80 = students.filter((student) => student.grade > 80);
console.log(studentsAbove80);
