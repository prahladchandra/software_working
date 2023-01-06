// document.getElementsByClassName("wrapper")[0].innerText;
// // var x= document.getElementsByClassName("wrapper")[0].innerText;
// // let text1= x.split('\n');
// // console.log(text1);


// 'We are a fast growing team of 2000+ people passionate about data and technology.\n\nWe help some of the most innovative startups in the world with AI data preparation, data enrichment, search relevance, content moderation, application development and quality engineering.'

// document.getElementsByTagName('ul')[0].outerText

// ''
// document.getElementsByTagName('ul')[0].innerText

// //.3

// document.getElementsByTagName("ul")[0].innerHTML


// document.getElementsByTagName("a")[0].href;


//.......................new Code is Here......................

// var x= document.getElementsByTagName('ul')[0].innerText          
// const myArray = x.split("\n");


// console.log(myArray);
// //...................................................
// //second text
// var x= document.getElementsByTagName("p")[4].innerText;
// console.log(x);

// //.........................................................

// var links = document.getElementsByTagName("a");
// for (var l = 0; l < links.length; l++){
//   console.log(links[l].href);
    
// }
//........................

// var links = document.getElementsByTagName("a");
// for (var l = 0; l < links.length; l++){
//   console.log(links[l].href);
//  abc[0].name.push(links[l].href);   
// } console.log(abc)

// var links = document.getElementsByTagName("a");
// for (let item of links){
// console.log(item.href)

// }

// xyz=[];
// var links = document.getElementsByTagName("a");
// for (let item of links){      
//   xyz.push({'Links': item.href});    
// }
// console.log(xyz);






// function ValidEmail(input) {

//   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//   if (input.match(validRegex)) {

//     alert("Valid email address!");

//     document.form1.text1.focus();

//     return true;

//   } else {

//     alert("Invalid email address!");

//     document.form1.text1.focus();

//     return false;

//   }

// }






















function ValidEmail(str, phone) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (str.match(validRegex)) {

    return true;

    

  } else {

    return false;
  }
  
  

}
// if (phone.match(validRegex)) {
//   return phone;
// } else {
//   return false;
// }




// var email1=ValidEmail("2345678&*&*&^(icloud.com")



function ValidEmail(str, phone) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var validphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;

  if (str.match(validRegex)) {

    return email;

  } else if (phone.match(validphone)) 
        {
         return phone;
        }
   else {
     return false;

  }
}
var email1 = ValidEmail("prahlad@gmail.com", "8209880442")
console.log(email1, phone)








































