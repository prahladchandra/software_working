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


const cars = ["BMW", "Volvo", "Mini"]; // for off loop

let text = "  ";
for (let x of cars) {
  text += x;
}
console.log(text)
console.log(typeof text );

















































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