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