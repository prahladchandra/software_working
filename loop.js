// const cars=["bmw","volvo","ford","fait","audi","woks00began"]
// let text="";
// for( let i=0; i< cars.length; i++){
//     text += cars[i] + "<br>";
// }
// console.log(text)

// const array1 = [1, 2, 3, 4];

// console.log(array1.fill(0,2,4))
// console.log(array1.fill(3,4))
// console.log(array1.fill(7))

// console.log(array1.fill(4));

// const arr=array1.fill({});
// console.log(arr)
// arr[0].hi="hi";
// arr[1].hello="dev";
// arr[2].sir="wellcome"
// console.log(arr[0],arr[1],arr[2])

//-----------------------------------------------------------
// var OneD = ["Bristol","Cardiff","Birmingham","Luton","Swansea","Aberdeen","Birmingham","Manchester","Southampton","Chester","Swansea","Brighton","Portsmouth","Bournemouth","Glasgow","Newcastle","Cardiff","Bristol"];

// var twoD = [];
// var cols = 2;

// for(var i = 0; i < OneD.length; i += cols) {
//   twoD.push(OneD.slice(i,i  ));
// }

// console.log(twoD);

// const numbers = [45, 4, 9, 16, 25]; // for in Loop

// let txt = " ";
// for (let x in numbers) {
//   txt += numbers[x];
// }

// console.log(txt);
// console.log(typeof txt );


// const cars = ["BMW", "Volvo", "Mini"]; // for off loop

// let text = "  ";
// for (let x of cars) {
//   text += x;
// }
// console.log(text)
// console.log(typeof text );


// let  value=[5,7,8,9];

// value.push(2);
// value.push(3)

//  console.log(value);
//.................................................date function...................................
// const d1 = new Date("2021-03-25");
// console.log(d1.getFullYear());

//  const d = new Date();
//  console.log(d.getFullYear);
//  console.log(d1.getUTCDay);

//...................................................nulish coalescing operator ??...............
// let a ;
// let b= 'height not defined';
// let height;
// height =(a== null || a== undefined) ?b :a;

// //height =a ?? b;
// console.log(height);

// let x= 10 /"hello";             //Boolean value
// console.log(Boolean(x));

// let text="";
// let i=0;
// while (i < 10) {
//   text += "<br>The number is" + i; 
//   i++;
// }
// console.log(text);

//loop for 
// for (let counter=1; counter<=10; counter++){
//   console.log(counter);

// }
// Anonoums function.................
//  let show=function(){
//   console.log('hello world');
//  };
//  show ();   // u can call with the help of   using variable call annoums fun


// setTimeout(function(){    //final..ouput
//   console.log('hello');
// },3000);

// immediately invoked function

// (function () {

//   console.log('hello!');
//   alert('hello word');

// })();

// random number........

// let x= Math.floor(Math.random()* 10) +1; //0-1 or if use floor the value given 1-9

// console.log(x);

// function getRandom(min,max){
//   let x= Math.floor(Math.random()* (max -min +1))+min;
//   return x;
// }
// console.log(getRandom(5,15));

// ................................map() function...........................
// const fruits= new Map([
//   ["apple",100],
//   ["banana",200],
//   ["oranges",500]
// ]);
// console.log(fruits.get("apple"));

// const fruit =new Map();

// fruit.set("apples",500)
// fruit.set("banana",300)
// fruit.set("oranges",800)

// console.log(fruit.get("banana"));
//.........................................itrator........................

// let i = [1,2,3,5,4,9]
// let iterator=i[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// .....................this keyword............................


// const person = {
//   firstName: "prahlad",
//   lastName: "chandra",
//   id: 54565,

//   fullName: function () {
//     return this.firstName + "" + this.lastName;
//   }
// }

// console.log(person.fullName());
//       normal fun or arrow function...............................

// // function declaration
// function test(msg) {
//   return `Hey ${msg}`
// }
// // function expression
// const test = function(msg) {
//   return `Hey ${msg}`
// }

// const arrowFunction = (msg) => {
//   const arrowFunction = (msg) => {  // both can be define  function deceleration or function expression......................
//     return `Hey ${msg}`
// }





// const people=[
//   {id:1,name:"jack"},
//   {id:2,name:"prahlad"},
//   { id:3,name:"yogesh"}
// ];

// people.reduce((lookup,person)=>({
//   ...lookup,
//   [person.id]:person
// }),{});


// console.log(people.reduce)



//----------------- why use strict mode in java script ----------------- 

// function abc(){
//   "use strict";
//     b=20;
//   console.log(b)
// }
// abc();


// function abc1(){ 
//   var b=20;
//  console.log(b)
// }
// abc1();
//...............................
function toArray(obj) {

  const result = [];
  for (const prop in obj) {
    const value = obj[prop];
    if (typeof value === 'object') {
      result.push(toArray(value)); // <- recursive call
    }
    else {
      result.push(value);
    }
  }
  return result;
}