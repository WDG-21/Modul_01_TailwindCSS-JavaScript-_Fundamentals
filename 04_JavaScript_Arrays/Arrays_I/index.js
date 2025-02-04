let fruits = ['apple', 'banana', 'cherry'];
// console.log(typeof fruits)
// console.log(fruits);
// console.log(fruits[1]);
// fruits[1] = 'Changed Value'

const wdg20 = ['Marcel', 'Noa', 'Mkyta', 'Bahman', 'Yakup', 'Andre', 'Ilona'];
const wdg21 = ['Patrick', 'Felicia', 'Yannis', 'Ramil', 'Boban'];

// SOME ARRAY METHODS, more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// CONCAT verbindet zwei oder mehrere Arrays
// const allStudents = wdg20.concat(wdg21);

// JOIN verbindet alle Elemente eines Arrays zu einem einzigen String.
// join akzeptiert ein optionales Trennzeichen als Parameter.
// Wenn kein Trennzeichen angegeben wird, verwendet join standardmäßig ein Komma.

// let fruitStringDefault = fruits.join();
// console.log(fruitStringDefault);

// Verbinde alle Elemente des Arrays mit einem Komma und einem Leerzeichen
// let fruitString = fruits.join(', ');
// console.log(fruitString);

// REVERSE Methode kehrt die Reihenfolge der Elemente in einem Array um.
// Diese Methode verändert das ursprüngliche Array.
// fruits.reverse();
// console.log(fruits)

// SPLICE
// Fügt 'NewStudent' an die erste Position (Index 0) hinzu
// wdg20.splice(0, 0, 'NewStudent');

// Entferne das Element an der ersten Position (Marcel)
// wdg20.splice(0, 1);

// Entferne zwei Elemente ab der ersten Position (Marcel & Noa)
// wdg20.splice(0, 2);

// Entferne das Element an der vierten Position (Index 3)
// wdg20.splice(3, 1);

// const firstTwoStudents = wdg21.slice(0, 2);
// console.log(wdg21);
// console.log(firstTwoStudents);

// SLICE erstellt eine Teilkopie eines Arrays und gibt diese als neues Array zurück, ohne das ursprüngliche Array zu verändern.
// kann zwei Parameter akzeptieren:
// 1. Startindex: Der Index, an dem das Ausschneiden beginnt.
// 2. Endindex (optional): Der Index, an dem das Ausschneiden endet (nicht einschließlich dieses Index).
// Wenn kein Endindex angegeben wird, schneidet slice bis zum Ende des Arrays.

// Erstellt ein neues Array, das die ersten beiden Elemente von wdg21 enthält
// const firstTwoStudents = wdg21.slice(0, 2);
// console.log(wdg21); // Ausgabe: Originales Array bleibt unverändert
// console.log(firstTwoStudents);

// Erstelle ein neues Array, das die Elemente von Index 1 bis zum Ende enthält
// const fromSecondStudent = wdg21.slice(1);
// console.log(fromSecondStudent);

// Erstelle ein neues Array, das die Elemente von Index 1 bis 3 (nicht einschließlich Index 3) enthält
// const middleStudents = wdg21.slice(1, 3);
// console.log(middleStudents);

const students = ['Patrick', 'Felicia', 'Yannis', 'Ramil', 'Boban'];

// forEach führt eine bereitgestellte Funktion einmal für jedes Element im Array aus.
// akzeptiert bis zu 3 Parameter: Element, index und das Array

// students.forEach(function () {
//   console.log('callback was called');
// });

// students.forEach(function (el) {
//   console.log(el);
// });

// students.forEach(function (student, i, arr) {
//   console.log(`${student} is here, index is: ${i} and exist in array:${arr}`);
// });

// ES6
// students.forEach((student) => console.log(`${student} is here`));
