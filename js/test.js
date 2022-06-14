// const x = 10;

// const y = 20;

// const z = x + y;

// const message = `Summ of ${x} and ${y} = ${z}`;
// console.log(x, y, z);
// console.log(message);
// console.log('X=', x, "Y=", y, "summ X+Y=", z);

// const conf = confirm("Should the rus warship go fuck itself?");
// console.log(conf);

// let promT = prompt("Enter number");
// console.log(promT);
// console.log(typeof promT);

// promT = Number(promT);
// console.log(promT);
// console.log(typeof promT);

// let height = '2.0077px';

// height = Number.parseFloat(height);
// console.log(height);

// let salary = 12.5557;
// console.log(typeof salary);
// console.log(salary);

// salary = salary.toFixed(2);
// console.log(typeof salary);
// console.log(salary);

// salary = Number(salary);
// console.log(typeof salary);
// console.log(salary);

//salary=Number (salary.toFixed(2));

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-3));

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function fn() {
//   // В переменной args будет полноценный массив
//   const args = Array.from(arguments);
//   return args;
// }

// console.log(fn(1,2,3,4,"home"));

// const multiply = function (x, y) {
//   console.log(`Результат сложения равен ${x+y}`);

// };
// multiply(4, 7);

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

// const a=message.split(" ");
//   const b = a.length;
//   const price = b * pricePerWord;
//   return price;

//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// function slugify(title) {
//   // Change code below this line
// const a=title.toLowerCase().split(" ").join("-");
// return a;

//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// const copy;
// const firstTwoEls = fruits.slice(0, 2) ;
// const nonExtremeEls = fruits.slice(1, fruits.length-1) ;
// const lastThreeEls = fruits.slice(-3);
// copy = lastThreeEls;

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// console.log(copy);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

// let b=firstArray.length+secondArray.length;
//   let c;
//   if (b > maxLength) { c = firstArray.concat(secondArray).slice(0, maxLength); }
//   else
//   { c = firstArray.concat(secondArray); }
//    return c;

//     // Change code above this line
//   }

//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//   console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
//   console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// function findLongestWord(string) {
//   // Change code below this line
//   let a = string.split(" ");
//   let array=[];

//   for (let i = 0; i < a.length; i += 1)
//   { array[i] = a[i].length; }

// //    return array;
//   //let maxIndex = array.indexOf(Math.max.apply(null, array));
//   let maxIndex = array.indexOf(Math.max(...array));
//   let maxsize = a[maxIndex].length;
//   let ar1 = [];
//   //return maxsize;

//   for (let y = 0; y < a.length; y += 1)
//   {
//     if (a[y].length === maxsize) { ar1.push(a[y]);
//     }
// }
//   return ar1;
// return maxIndex;

//return a[maxIndex];

// return array;
// let b;
// b = Math.max(...array);
// return b;
//array = a[4].length;

// for (let i = 0; i < a.length; i += 1)
// { array = a[i].length; };

//return a.length;
// let c;
// for (let i = 0; i < a.length; i += 1)
// { c = a[i].length; }

// return c;

// Change code above this line
// }

// console.log(findLongestWord("The quick brown3 fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a rollfd"));
// console.log(findLongestWord("May the force be with4 you"));

// function filterArray(numbers, value) {
//    // Change code below this line
// let newarray=[];
// for(let i; i<numbers.length; i +=1)
// {
//   if (numbers[i] > value) { newarray.push(numbers[i]); }

// }
// //return numbers.length;
// //return newarray;
//   return numbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getCommonElements(array1, array2) {
//   // Change code below this line
// let newar=[];

// for(let i=0; i<array1.length; i+=1){
//   if (array2.includes(array1[i])) { newar.push(array1[i]); }
//   }
//    return newar;
//  // Change code above this line

// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// const propName = "xxx";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола",
// };

// console.log(user.xxx); // 'Генри Сибола'

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks();

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks());

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   //console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// console.log(book.title);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[1];
// //const lastTag = apartment.tags[2];
// //const lastTag = apartment.tags[3];

//  const a = apartment.tags[apartment.tags.length-1];
// // Change code above this line

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);
// console.log(a);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

//multiply(1, 2);
//multiply(1, 2, 3);
//multiply(1, 2, 3, 4);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area=60;
// apartment.rooms=3;

// const location={};
// apartment.location=location;

// apartment.location.country="Jamaica";
// apartment.location.city="Kingston";

// // Change code below this line

// console.log(apartment);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const result=[];

// for(const values of products)
// {
//   console.log(values);
//   result.push(values.price);
//   console.log(values[propName]);

//   }
//  console.log(result);
// //return result;
//   // Change code above this line
// }

// console.log(getAllPropValues('price'));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const prod of products) {
//     console.log(prod);
//     const keys = Object.keys(prod);
//     //console.log(keys);
//   // if(keys.includes('name')) {console.log(prod.name);}  else {console.log('eeee');}
//    // if(prod['name']) {console.log(prod.name);}  else {console.log('eeee');}
//    // if(prod.name) {console.log(prod.name);}  else {console.log('eeee');}
//    // if(prod.name === 'Radar') {console.log(prod.name);}  else {console.log('eeee');}
//      if(prod.name === productName) {console.log(prod.name);}  else {console.log('eeee');}
//   }

//   // Пиши код выше этой строки
// }

// //console.log(calculateTotalPrice("Blaster"));
//  console.log(calculateTotalPrice("Radar"));
// // console.log(calculateTotalPrice("Droid"));
// // console.log(calculateTotalPrice("Grip"));
// // console.log(calculateTotalPrice("Scanner"));

// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
// //const {{todayLow:today.low, todayHigh:high, tomorrowLow, tomorrowHigh}=forecast;
//   // Change code above this line

//   const { today: { low: todayLow, high: todayHigh, } , tomorrow:{low: tomorrowLow, high: tomorrowHigh}}= forecast;
//   console.log(todayLow, todayHigh, tomorrowLow, tomorrowHigh);
//    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

// addPotion(newPotion) {
//   const { name, price } = newPotion;
//   console.log(name);
//   console.log(price);
//   console.log(newPotion);

//   // for (let i = 0; i < this.potions.length; i += 1) {
//   //   console.log(this.potions[i].name);
//   //   if (this.potions[i].name === name) { return `Naideno ${this.potions[i].name} ravnoe ${name} s indexom ${i}`; }
// addPotion(newPotion) {
//   const {name} = newPotion;
//   for (let pot of this.potions) {
//     if (name === pot.name) { return `Error! Potion ${newPotion} is already in your inventory!` }
//   }
//   this.potions.push(newPotion);

//   // }
//   // this.potions.push(newPotion);

//   for (let pot of this.potions) {

//     if (name === pot.name) { return `Error! Potion ${newPotion} is already in your inventory!` }

//   }
//      this.potions.push(newPotion);
// },

// removePotion(potionName) {
//   for (let i = 0; i < this.potions.length; i += 1) {
//   //console.log(this.potions[i]);
//     if (potionName === this.potions[i].name) { this.potions.splice(i, 1); }
//     //{ this.potion.splice(i, 1); }
//     //{ console.log(this.potions[i]); }
//   }

//   // const potionIndex = this.potions.indexOf(potionName);

//   // if (potionIndex === -1) {
//   //   return `Potion ${potionName} is not in inventory!`;
//   // }
//   // rabotaet!!!!  this.potions.splice(1, 1);
//   // this.potions.splice(potionIndex, 1);
// },
// },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {

//      this.potions[i].name = newName;

//       }
//     }return `Potion ${oldName} is not in inventory!` ;

//     //this.potions[i].name = newName;

//     //name1.name = newName;
//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//   },
// }

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
//console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
//console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// //console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// //console.log(atTheOldToad.potions);
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   addPotion(newPotion) {
//     const { name } = newPotion;
//     for (let pot of this.potions) {
//       if (name === pot.name) { return `Error! Potion ${name} is already in your inventory!` }
//     }
//     this.potions.push(newPotion);
//   },
// }

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

// console.log(atTheOldToad.potions);

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// function greet(name1xxx,name2xxx) {
//   console.log(`Добро пожаловать ${name1xxx},--- ${name2xxx}.`);
// }

// // Функция высшего порядка
// function registerGuest(name1,name2,callback) {
//   console.log(`Регистрируем гостя ${name1} and гостя ${name2}.`);
//  callback(name1,name2);
// }

// registerGuest("Манго",'Voha', greet);

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],

//   order(pizzaName, onSuccess, onError) {

//     if (this.pizzas.includes(pizzaName)) {
//      return onSuccess(pizzaName);
// }
//     return onError(pizzaName);

//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// // pizzaPalace.order('Smoked', makePizza, onOrderError);
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// // pizzaPalace.order('Big Mike', makePizza, onOrderError);
// // pizzaPalace.order('Vienna', makePizza, onOrderError);

// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// const users= [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = users => {

// //return  users.map(user => user.name)
//   return users.map(mail => mail.email);
// };

// console.log(getUserNames(users));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// const oddNumbers = numbers.filter(value => value % 2 !== 0);
// const oddNumbers1 = numbers.filter(function (value) { if (value % 2 !== 0) return value; });

// console.log(evenNumbers);
// console.log(oddNumbers);
// console.log(oddNumbers1);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//    return  users.filter(nam => nam.friends.includes(friendName) );
// };
// // Change code above this line

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));

// const getFriends = (users) => {
//    const allFriends=users.flatMap(user=> user.friends);

//   const uniqFriends = allFriends.filter((element, index, arrow) => arrow.indexOf(element) === index);
//   return uniqFriends;
// };

// console.log(getFriends(users));

// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive === true);
// };

// console.log(getActiveUsers(users));

// const isAnyUserActive = users => {
//   return users.some(user => user.isActive === true);
// };

// console.log(isAnyUserActive(users));

// const calculateTotalBalance = users => {
//   return users.reduce((total, number) => {
//     return total + number.balance;
//   }, 0);

// };

// console.log(calculateTotalBalance(users));

// const getTotalFriendCount = users => {
//   return users.reduce(
//     (total, user) => { return total + user.friends.length; }, 0);
// };

// console.log(getTotalFriendCount(users));

// const sortByAscendingBalance = users => {
//   return users.sort((a, b) => a.balance - b.balance)
// };

// console.log(sortByAscendingBalance(users));

// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a,b) => b.friends.length - a.friends.length);
// };

// console.log(sortByDescendingFriendCount(users));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter(element => element.rating > MIN_BOOK_RATING)
//   .map(authors => authors.author)
// .sort((a, b) => a.localeCompare(b));

// console.log(names);

// const users =[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(local => local.name);
// };

// console.log(getNamesSortedByFriendCount(users));

// const getSortedFriends = users => {

//   return [...users].flatMap(local => local.friends)
//     .filter((co, ind, arr) => arr.indexOf(co) === ind)
//   .sort((a,b) => a.localeCompare(b));

// };

// console.log(getSortedFriends(users));

// const getTotalBalanceByGender = (users, gender) => {
//   return [...users].filter(value => value.gender === gender)
//     .map(value => value.balance)
//     .reduce((total, count) => { return total +count});
// };

// console.log(getTotalBalanceByGender(users, 'male'));
// console.log(getTotalBalanceByGender(users, 'female'));

// class Storage {

//     constructor(items)
//     {
//         this.items= items;
//     }

//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
// this.items.push(newItem);
//     }

//     removeItem(itemToremove)
//     {
//       const index1 = this.items.findIndex((element) => element === itemToremove);
//     //  console.log(index1);
//         this.items.splice(index1,1);

//     }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     console.log(User.#takenEmails);
//     return User.#takenEmails.includes(email);

//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });
// const poly = new User({ email: "poly@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
// //accessLevel;
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// constructor ({email, accessLevel}) {
//   super(email);
//  this.accessLevel = accessLevel;

// }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
// const i = 5;
// console.log('Hello',i);

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   // get email() {
//   //   return this.email;
//   // }

//   // set email(newEmail) {
//   //   this.email = newEmail;
//   // }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//    super();
//     this.email = email;
//     this.posts = posts;
//     //this.email = email;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [1,2] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// console.log(editor.posts);

// const array = [1, 10, 50, 34, 60, 4, 6, 37];

// // let maxIndex = array.indexOf(Math.max(...array));
// // console.log(maxIndex);

// function fn(args) {
//   let newar=[];
//   for (let i = 0; i < args.length; i+=1) {
//     newar.push(args[i]);
//     //console.log(newar[i]);
//    }
//   // console.log(newar[4]);
//   // return newar;
//   let a = array.indexOf(Math.max(...array));
//   return a;

// }

// console.log(fn(array));

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4, 5);
// console.log(multiply(1, 2, 3, 4, 5));

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon VOVAS chronicles'));
// console.log(bookShelf.updateBook('The last kingdom', 'VOVA'));

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { name, price } = newPotion;

//     for (let pot of this.potions) {
//       if (pot.name === name) {
//         return `Error! Potion ${name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let pot of this.potions) {
//       if (pot.name === potionName) {
//         this.potions.splice(this.potions.indexOf(pot), 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let pot of this.potions) {
//       if (pot.name === oldName) {
//         pot.name = newName;
//         return;
//         //const indexOfElement=
//         //   this.potions.splice(this.potions.indexOf(pot), 1, newName);
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// //console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));

// // console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// //console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log();
// console.log();
// console.log();
// console.log();
// console.log(atTheOldToad.getPotions());

// console.log(document);

// const body = document.body;
// console.log('Telo', body);

// const list = body.firstElementChild;
// console.log('pervyi rebenok', list);

// const firstListItem = list.firstElementChild;
// console.log('pervyi element rebenka', list, firstListItem);

// const listItems = list.children;
// console.log('vse deti elementa', list, listItems);

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// //===================================================
// const message = document.querySelector('#message');
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector('.btn.active');
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector('.image');
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';

// const text = document.querySelector('.article-text');
// console.log(text.textContent); // text inside p.article-text
// //text.textContent = 'fuck you';

// const title = document.querySelector('.article-title');
// title.textContent = 'Welcome to hell!';

// const image = document.querySelector('.image');

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute('src')); // true

// console.log(image.getAttribute('alt')); // "Lake and clouds"

// image.setAttribute('alt', 'Amazing nature');

// console.log(image.getAttribute('alt')); // Amazing nature

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach(dish => {
//   console.log(`${dish.textContent} coocked by Voha`);
//   console.log(dish.dataset.id);
// });

// const list = document.querySelector('.usernames');

// // Adds an item to the end of the list
// const lastItem = document.createElement('li');
// lastItem.textContent = 'Poly';
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement('li');
// firstItem.textContent = 'Ajax';
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement('h2');
// title.textContent = 'USERNAMES';
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement('p');
// text.textContent =
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!';

// list.after(text);
// text.classList.add('newwwA');
// //text.setAttribute('class', 'new0');
// console.log(text.attributes.class);

// const toRemove = document.querySelector('.newwwA');
// toRemove.remove();

// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies.map(technology => `<li class="list-item">${technology}</li>`).join('');

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// const singleBtn = document.querySelector('#single');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// singleBtn.addEventListener('click', handleClick);

// // ===============================================
// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => {
//   console.log('First callback!');
// };
// const secondCallback = () => {
//   console.log('Second callback!');
// };
// const thirdCallback = () => {
//   console.log('Third callback!');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// //multiBtn.addEventListener('click', thirdCallback);

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });

// const button = document.querySelector('.btn');

// const handleClick = event => {
//   console.log('event: ', event);
//   console.log('event type: ', event.type);
//   console.log('currentTarget: ', event.currentTarget);
// };

// button.addEventListener('click', handleClick);

// const form = document.querySelector('.register-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const {
//     elements: { username, password, sex },
//   } = event.currentTarget;
//   console.log(username.value, password.value, sex.value + 12345);
// });

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// });

// document.addEventListener('keydown', event => {
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector('.log-list');
// let keypressCounter = 1;

// document.addEventListener('keydown', logMessage);
// document.addEventListener('keyup', logMessage);
// clearLogBtn.addEventListener('click', reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML('afterbegin', markup);

//   if (type === 'keyup') {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = '';
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// document.addEventListener('keydown', event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
//     console.log('«Ctrl + s» or «Command + s» combo');
//   }
// });

// const form = document.querySelector('.form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');
// const ff = document.querySelector('.new');

// //setOutput();

// select.addEventListener('change', setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// const dishes = document.querySelectorAll('.pizzaselect > .new');
// dishes.forEach(dish => {
//   console.log(dish.getAttribute(value));
// });

// console.log(dishes);

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach(dish => {
//   console.log(dish.dataset.id);
// });

// const textInput = document.querySelector('.text-input');
// const output = document.querySelector('.output');

// textInput.addEventListener('input', event => {
//   output.textContent = event.currentTarget.value;
// });
// const parent = document.querySelector('#parent');

// parent.addEventListener('click', event => {
//   console.log('event.target: ', event.target);
//   console.log('event.currentTarget: ', event.currentTarget);
// });

// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;

//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRangomColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRangomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, '0');
// }

// const parent = document.querySelector('#parent');

// parent.addEventListener('click', event => {
//   console.log('event.target: ', event.target);
//   console.log('event.currentTarget: ', event.currentTarget);
// });

// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timerId = null;

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.ceil(Math.random() * 100)}`);
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// const date = new Date();
// const str = date.toString();
// const notstr = date;

// console.log(notstr);
// console.log(str);
// ('2022-05-27T12:36:24.947Z');

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Will run first
// console.log('Before promise.then()');

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log('onReject call inside promise.then()');
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log('After promise.then()');

// promise.then(value => {console.log(value);}).catch(error => {console.log(error); });

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess(`success value ${username}`);
//     } else {
//       onError('error sfsfs');
//     }
//   }, 2000);
// };

// const onFetchSuccess = user => {
//   console.log(user);
// };

// const onFetchError = error => {
//   console.error(error);
// };

// fetchUserFromServer('Mango', onFetchSuccess, onFetchError);

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve('success value');
//       } else {
//         reject('error');
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer('Mango')
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));

// const makeGreeting = guestName => {
//   if (guestName === '' || guestName === undefined) {
//     return Promise.reject('Guest name must not be empty');
//   }

//   return Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting('Mango')
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUserList(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUserList(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//            <p><b>street</b>: ${user.address.street}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: 'name',
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

// const fetchPostsBtn = document.querySelector('.btn');
// const userList = document.querySelector('.posts');

// fetchPostsBtn.addEventListener('click', () => {
//   fetchPosts()
//     .then(posts => renderPosts(posts))
//     .catch(error => console.log(error));
// });

// function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: 2,
//     // Change the group number here
//     _page: 4,
//   });

//   return fetch(`https://jsonplaceholder.typicode.com/posts?${params}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }
// import bootstrap from 'bootstrap';

// const postToAdd = {
//   author: 'Mango',
//   body: 'CRUD is awesome',
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// const postToUpdate = {
//   id: 101,
//   body: 'CRUD is really awesome',
// };

// const options = {
//   method: 'PATCH',
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log('ERROR' + error));

// const postIdToDelete = 101;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: 'DELETE',
// })
//   .then(() => console.log('Post deleted'))
//   .catch(error => console.log('Error:', error));

// const postId = 100;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// const fetchFriends = () => {
//   return fetch('my-api.com/me')
//     .then(token => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then(user => {
//       return fetch(`my-api.com/users/${user.id}/friends`);
//     });
// };

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));

// const fetchUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchUsers();

// const fetchUsers = async () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const firstResponse = await fetch(`${baseUrl}/users/1`);
//   const secondResponse = await fetch(`${baseUrl}/users/2`);
//   const thirdResponse = await fetch(`${baseUrl}/users/3`);

//   const firstUser = await firstResponse.json();
//   const secondUser = await secondResponse.json();
//   const thirdUser = await thirdResponse.json();

//   console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();

// const fetchUsers = async () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const userIds = [1, 2, 3];

//   // 1. Создаём массив промисов
//   const arrayOfPromises = userIds.map(async userId => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     console.log(response);
//     return response.json();
//   });

//   // 2. Запускаем все промисы параллельно и ждем их завершения
//   const users = await Promise.all(arrayOfPromises);
//   console.log(users);
// };

// fetchUsers();

const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

fetchUsersBtn.addEventListener('click', async () => {
  try {
    const users = await fetchUsers();
    renderUserListItems(users);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchUsers() {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const userIds = [1, 2, 3, 4, 5];

  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  return users;
}

function renderUserListItems(users) {
  const markup = users
    .map(
      user => `<ul class="item">
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
      </ul>`
    )
    .join('');
  userList.innerHTML = markup;
}
