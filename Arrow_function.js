// const square =x=>{
//     return x* x;
// }



// const annoying =()=>{
//     console.log(" ?Heloo Arcgate! ..")
// }

// console.log(annoying());

// const makeCard =()=>{(
//     suit: 'hearts', val: 3
// })


// const invoices = [{
//     client: "Billy",
//     amount: 400.48,
//     hasPaid: false

// }, {
//     client: "pra ",
//     amount: 350.48,
//     hasPaid: false


// }, {
//     client: "Bill",
//     amount: 455.48,
//     hasPaid: false
// }, {
//     client: "Blly",
//     amount: 658.48,
//     hasPaid: false
// }]

// const stilOwend= invoices.filter(function(invoices){
//     return !invoices.hasPaid;
// })
// .reduce(function(total,invoices){
//     return total +invoices.amount;
// },0)



//or ...

// const stilOwend=invoices

// .filter(i => !i.hasPaid)
// .reduce((total,i)=> total + i.amount,0)
// console.log(invoices);
// console.log(stilOwend);

 

// let x= 10;

// switch(x){
//     case 10:
//         console.log(x)
        
// }

// // Swtich Statement .................
// let day = "Festivalday"
// switch (day) {
//     case 'Monday':
//         console.log("7 AM");
//         break

//     case 'Tuesday':

//     case 'Wednesday':
//         console.log("6 AM");
//         break;
//     case 'Thursday':
//         console.log("8 AM");
//     case 'Friday':
//         console.log("2 AM");
//     case 'Satday':

//     case 'Holiday':

//     case 'Festivalday':
//         console.log("home");
//         break
//     case 'SalaryDay':
//         console.log("party");
//         break;
// }
// console.log("byeeeeeeeee");
//...............................................
// let x=0; 
// Boolean(x == 10);
// console.log(Boolean(x ==10)); //This returns false (as expected) because x is not equal to 10:


// Hoisting .............. Decleartion are hoisted initlization are not hoisted ..bellow the example.

// stepone();

// const stepone = () => {         //stepone, is anonomys function. 
//     console.log('step one');
// }

// console.log(stepone());

// console.log(x);
//  var x= 5;  // or let x=5  it gets in error 

// example 2:


 
//document.addEventListener("DOMContentLoaded",initApp);


// const array=[1,2,3,4,5]
// console.log(array)
// array.push(45)
// console.log(array);
// console.warn(array)

// console.time('st');
// setTimeout(()=>{
//     console.timeEnd('st')
// },3000);



// example spread operator..............

// let x= [1,2,3,4,5,6];
// let y= [8,9,10,11];
// console.log([...x ,...y]);


// function myfunction(a){
//     let power =10;
//     return a* power
// }
// console.log(myfunction (55));


// Arrow function in java script (fat Arrow function es 2015,ecma6)

// "use strict"
// var a= 4;
// debugger;
// let mult =(a,b)=>{return a* b};
// console.log(mult(2,5));


// Closer in Javascript.......
// let f;

// if(true){
//     let i=1;

//     f=()=>{
//         console.log(i);
//     }
// }

// console.dir(f);
// f()

// const str1 = '5';

// console.log(str1.padStart(, '.'));

// for Each loop.........................

// num=[23,44,45,21,11,33]

// num.forEach((n,i,num) => {

//     console.log(n,i,num);  //n= fun i= index;num= whole array;
    
// });

// decodeing binary Message with javascript: 
// var mes ='01001001 01110100 00100111 01110011 00100000 01101011 01101001 01101110 01100100 00100000 01101111 01100110 00100000 01101100 01101001 01101011 01100101 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101101 01110000 01110101 01110100 01100101 01110010 00100000 01101001 01110011 00100000 01101101 01100001 01100100 01100101 00100000 01110101 01110000 00100000 01101111 01100110 00100000 01100001 00100000 01100010 01110101 01101110 01100011 01101000 00100000 01101111 01100110 00100000 01101100 01101001 01100111 01101000 01110100 01110011 01110111 01101001 01110100 01100011 01101000 01100101 01110011 00101100 00100000 01100001 01101110 01100100 00100000 01100101 01100001 01100011 01101000 00100000 01101100 01101001 01100111 01101000 01110100 01110011 01110111 01101001 01110100 01100011 01101000 00100000 01100011 01101111 01101110 01110100 01110010 01101111 01101100 01110011 00100000 01101010 01110101 01110011 01110100 00100000 01101111 01101110 01100101 00100000 01101100 01101001 01100111 01101000 01110100 01100010 01110101 01101100 01100010 00101110 00100000 01001111 01101110 00100000 01101111 01110010 00100000 01001111 01100110 01100110 00101110 00100000 01001111 01101110 01100101 00100000 01101111 01110010 00100000 01011010 01100101 01110010 01101111 00101110 00100000 01000010 01110101 01110100 00100000 01101001 01100110 00100000 01111001 01101111 01110101 00100000 01110100 01101111 01101111 01101011 00100000 01100001 01101100 01101100 00100000 01101111 01100110 00100000 01110100 01101000 01101111 01110011 01100101 00100000 01101100 01101001 01100111 01101000 01110100 01100010 01110101 01101100 01100010 01110011 00100000 01110100 01101111 01100111 01100101 01110100 01101000 01100101 01110010 00101100 00100000 01100001 01101110 01100100 00100000 01110011 01100001 01101001 01100100 00100000 00100010 01001100 01100101 01110100 00100111 01110011 00100000 01101101 01100001 01101011 01100101 00100000 01100101 01100001 01100011 01101000 00100000 01110011 01100101 01110001 01110101 01100101 01101110 01100011 01100101 00100000 01101111 01100110 00100000 01001111 01101110 00101101 01100001 01101110 01100100 00101101 01001111 01100110 01100110 00100000 01110010 01100101 01110000 01110010 01100101 01110011 01100101 01101110 01110100 00100000 01100001 00100000 01100100 01101001 01100110 01100110 01100101 01110010 01100101 01101110 01110100 00100000 01101110 01110101 01101101 01100010 01100101 01110010 00100001 00100010 00100000 01010111 01100101 01101100 01101100 00100000 01110100 01101000 01100101 01101110 00101100 00100000 01111001 01101111 01110101 00100000 01100011 01101111 01110101 01101100 01100100 00100000 01100111 01100101 01110100 00100000 01110011 01101111 01101101 01100101 00100000 01110000 01110010 01100101 01110100 01110100 01111001 00100000 0110110';
// const res=mes
//     .split(' ')
//     .map(b => parseInt(b,2))
//     .map(num => String.fromCharCode(num))
//     .join('');
// console.log(res);

// x="3";
// y='4';
// z=x+y;
// console.log(z);

// const counter = function() {
//     let count = 0;
//     return function() {
//         return ++count;
//     }
// };

// const x = counter();
// x(); // Returns 1
// x(); // Returns 2
// // x(); // Returns 3
// console.log(x())