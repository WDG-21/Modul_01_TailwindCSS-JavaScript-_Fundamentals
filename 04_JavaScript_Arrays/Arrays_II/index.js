const students = ['Boban', 'Felicia', 'Patrick', 'Yannis', 'Ramil'];

// students.forEach(function () {
//   console.log('callback was called');
// });

// students.forEach(function (el, i, arr) {
//   console.log(el, i, arr);
// });

// students.forEach((el) => console.log(el));

// function greet(name) {
//   //   return 'Hello ' + name;
//   return `Hello, ${name}`;
// }

// function specialGreet(callback) {
//   const name = prompt('Please enter your name');
//   return callback(name);
// }

// console.log(specialGreet(greet));

// MAP

// const numbers = [5, 10, 15, 20];
// console.log('Numbers Array:', numbers);

// const doubleNumbers = numbers.map((num) => num * 2);
// console.log('Double Numbers Array:', doubleNumbers);

// FILTER
// const age = [16, 21, 18, 34, 15, 28];
// console.log('ageArray', age);

// const adults = age.filter((el) => el >= 18);
// console.log('Welcome to Party:', adults);

// FIND
// const numbers = [3, 7, 11, 8, 15, 2];
// const firstTwoDigit = numbers.find((num) => num > 10);

// console.log(firstTwoDigit);

// SOME
// const numbers2 = [3, 7, 11, 8, 15, 2];
// const hasLargeNumber = numbers2.some((num) => num > 10);
// console.log(hasLargeNumber);

// EVERY
// const numbers = [3, 7, 11, 8, 15, 2];
// const allSmallNumbers = numbers.every((num) => num < 16);
// console.log(allSmallNumbers);

// REDUCE
// const numbers = [5, 10, 15, 20];
// const total = numbers.reduce((acc, i) => acc + i, 0);

// console.log(total);

const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
];

// console.log(products[0].rating.rate);

// MAP
const productTitles = products.map((product) => product.title);
// console.log(productTitles);
const productsDescription = products.map((product) => product.description);
// console.log(productsDescription);

// FILTER
const search = products.filter((el) => el.title === 'Mens Cotton Jacket');
// console.log(search);

// FIND
const find = products.find((product) => product.price === 55.99);
// console.log(find);

// SOME
const some = products.some((product) => product.price >= 109.95);
// console.log(some);

// REDUCE
const reduce = products.reduce((acc, product) => acc + product.price, 0);
// console.log(reduce.toFixed(2) + '€');

// REDUCE II
const totalRating = products.reduce(
  (acc, product) => acc + product.rating.rate,
  0
);

console.log(totalRating);
const avarageRating = totalRating / products.length;
console.log(avarageRating);

const cusomterFeedback = (avarageRating / 5) * 100;
console.log(cusomterFeedback.toFixed(2) + '%');
