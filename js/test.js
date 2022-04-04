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