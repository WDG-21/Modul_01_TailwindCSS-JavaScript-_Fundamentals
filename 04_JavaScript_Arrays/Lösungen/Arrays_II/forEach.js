// FOREACH
// 1- Erstelle ein Array namens numbers mit den Werten 1, 2, 3, 4, 5.
const numbers = [1, 2, 3, 4, 5];

// 2- Verwende die forEach-Methode, um jede Zahl auszugeben:
// a- Iteriere mit forEach über das Array und gib jede Zahl in der Konsole aus.
numbers.forEach((num) => console.log(num));

// 3- Verwende die forEach-Methode, um die Summe zu berechnen:
// a- Initialisiere eine Variable sum mit 0.
// b- Addiere jede Zahl im Array mit forEach zur Summe hinzu.
// c- Gib das Endergebnis aus.

let sum = 0;
numbers.forEach((num) => (sum = sum + num));
// numbers.forEach((num) => (sum += num)); // Kurzschreibweise-Operator für Addition und Zuweisung
// console.log(sum);

// 4-  Verwende die forEach-Methode, um ein neues Array mit quadrierten Werten zu erstellen:
// a- Erstelle ein leeres Array namens squaredNumbers.
// b- Iteriere mit forEach über das Array, quadriere jede Zahl und speichere sie in squaredNumbers.
// c- Gib das neue Array aus.

const squaredNumbers = [];
numbers.forEach((number) => squaredNumbers.push(number * number));
// console.log(squaredNumbers);
