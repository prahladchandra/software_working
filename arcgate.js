// // //or .............................
// // xyz = []; 
// // var x = document.querySelectorAll('header')
// // // const myArraya = x.split("\n");
// // var links = document.querySelectorAll(' header ul li a');

// // console.log(links);

// // for (let myArray of links) {
// //     if (myArray.innerText != '' ){
    
// //     xyz.push({ 'Name':myArray.innerText, 'link': myArray.href});
 
// // }
// // }
// // console.log(xyz);

// // //or ..................

//javascript ....................................................................................
xyz = []; 
var links = document.querySelectorAll('header ul li a');
console.log(links);
for (let myArray of links) {
    if (myArray.Text != '' ){          
    xyz.push({ 'Name':myArray.text, 'link': myArray.href});
 
}
}
console.log(xyz);

// jQuery..........................................................


const text5 = $("header").find(" a")

const youtube1 = text5.map(function(index,el){
     // console.log("hiiii",youtube1)
  return el.href
})

console.log(youtube1)
// ---------------------------------------------------------------------------------------------------------------

// // //or footer
// // xyz = []; 
// // var links = document.querySelectorAll('footer ul li a');
// // console.log(links);
// // for (let myArray of links) {
// //     if (myArray.Text != '' ){          
// //     xyz.push({ 'Name':myArray.innerText, 'link': myArray.href});
 
// // }
// // }
// // console.log(xyz);
or Vidioes.....................


var VideoUrl=[];
var x=document.getElementsByClassName("various fancybox.iframe")
for(let links of x){
    
    VideoUrl.push({'Youtubelink': links.href});
}
console.log(VideoUrl);





// //word string...................


// // function decodeHtml(html) {
// //     var txt =createElement("textarea");
// //     txt.innerHTML = html;
// //     return txt.value;
// // }
// // console.log(decodeHtml('&Ouml;zgen Plastik Hasan'));

// // function myfunction(p1,p2){
    
// //     return p1 * p2;
// // }
// // console.log(myfunction(2,4));


// // twitts  text ..................................

// // ab=[];
// // var x= document.querySelectorAll(".twit_description, .profileimage, .title")
// // for(let tweets of x){
// //     console.log(tweets.innerText)
// //    ab.push({"text": 'tweets.innertext'})
// // }
// //  console.log(ab);
// // image .............................   
// //  ab=[];
// // var x= document.querySelectorAll(".dataprocessing bpo-services grayish, .data-processing-icons clearfix ,img")
// //  for (let myArray of x) {
// //     console.log(myArray)
     
// //     if (myArray != '' ){          
// //     ab.push({'link': myArray.src});
 
// // }
// // }
// // console.log(ab);












// // const puppeteer = require('puppeteer')

// // async function getVisual() {
// // 	try {
// // 		const URL = 'https://www.reddit.com/r/programming/'
// // 		const browser = await puppeteer.launch()

// // 		const page = await browser.newPage()
// // 		await page.goto(URL)

// // 		await page.screenshot({ path: 'screenshot.png' })
// // 		await page.pdf({ path: 'page.pdf' })

// // 		await browser.close()
// // 	} catch (error) {
// // 		console.error(error)
// // 	}
// // }

// // getVisual()



// //phone

// function telephoneCheck(str) {
//     var isphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);
//     alert(isphone);
//   }
//   telephoneCheck("1 555 555 5555");


// var validphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
//   else if (str.match(validphone)) {
//         console.log("this is Phone", str)
//         return str;
//     }






// function ValidEmail(str) {

//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var validphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
//     var validURL = new RegExp('^(https?:\\/\\/)?' +
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
//         '((\\d{1,3}\\.){3}\\d{1,3}))' +
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
//         '(\\?[;&a-z\\d%_.~+=-]*)?' +
//         '(\\#[-a-z\\d_]*)?$', 'i');

//     if (str.match(validRegex) === true) {

//         return str;

//     }
//     else if (str.value.match(validphone) === true) {
//         return phone;
//     }
//     else if (str.match(vaildURL) === true) {

//         return URL;
//         {
//             return false;

//         }
//     }
// }

//     var email = ValidEmail("prahlad@gmail.com")
//     var phone = ValidEmail(8209880442)
//     var url = ValidEmail("https://www.w3schools.com")
//     console.log(email);
//     console.log(phone);
//     console.log(url);

//??
// const firstName = 'prahlad';
// const lastName = 'kumar';
// const city="udaipur";
// const pincode="306001"

// var xyz = function(firstName,lastName){
//     let nameArray = [firstName, lastName];
//       return nameArray.join(' ');
// };

// var abc = function(city,pincode){
//     let nameArray = [city, pincode];
//       return nameArray.join(' ');
// };

// console.log(xyz(firstName,lastName) + ' ' + abc(city,pincode));





// var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// var validURL = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
// var validphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;


// function ValidEmail(str) {
//     if (str.match(validRegex)) {
//         console.log("This is email", str)
//         return "email";
//     }
//     else if (str.match(validURL)) {
//         console.log("This is url", str)
//         return "url";
//     }
//     else if (str.match(validphone)) {
       
//         return "phone";
//     }

//     else {
//         return "this is not valid"
  
// }
// }


// var check = ValidEmail("8209880442");
// console.log(check);

// const userprofile= {
//      FirstName: "prahlad",
//      LastName: "chandra",
//      Address: "city",
//      pincode:"54455"
// }

// var first = "prahlad";
// var second = "chandra";
// getprofile = function() {
   

   
// }
// console.log('first'+" "+'second');


// const firstName = 'prahlad';
// const lastName = 'kumar';
// const city="udaipur";
// const pincode="306001"

// const getprofile = function(firstName,lastName,city,pincode){

//        let nameArray = [firstName, lastName,city,pincode];

       
  
//        return nameArray.join(' ' );

     

// };
// console.log(getprofile(firstName, lastName,city,pincode));

// const city='udaipur'
// const pincode='54525'

// function getprofile(){
//     const name="prahld";
//     const lastname="chandra";


//     function address(){
//     return ` ${name + lastname} ${city} ${pincode}`;
// }
//     return address();
// }
//  var fullprofile=getprofile();
// console.log(fullprofile);



// var first_name = 'krishna';
// var last_name = 'tailor';
// var street = '08 nakoda nagar'
// var city1 = 'udaipur'
// var state = 'rajasthan'
// function getprofile() {
//     my_name = ''
//     address = ''
//     my_name1 = function (first_name1, last_name1) {
//         let my_name= [first_name1, last_name1];
//         return my_name.join(' ');
//     }
//     console.log(my_name1(first_name, last_name));
//     my_name = (my_name1(first_name, last_name));
//     address1 = function (street, city1, state) {
//         return `${street} ${city1} ${state}`;
//     }
//     console.log(address1(street, city1, state));
//     address = (address1(street, city1, state))
//     return { 'name': my_name, 'address': address }
// }
// var profile_data = getprofile();
// console.log(profile_data)



//or---------------------or------------------------------




// var first_name = 'krishna';
// var last_name = 'tailor';
// var street = '08 nakoda nagar'
// var city1 = 'udaipur'
// var state = 'rajasthan'
// function getprofile() {
//     my_name = user_name;
//     address = user_address;

//     return { 'name': my_name, 'address': address }
// }

// my_name1 = function (first_name1, last_name1) {
//     let my_name = [first_name1, last_name1];
//     return my_name.join(' ');
// }

// console.log(my_name1(first_name, last_name));
// user_name = (my_name1(first_name, last_name));


// address1 = function (street, city1, state) {
//     return `${street} ${city1} ${state}`;
// }
// console.log(address1(street, city1, state));
// user_address = (address1(street, city1, state))


// var profile_data = getprofile();
// console.log(profile_data)

























// ----------------------------------------------------or List Exibhiter....................................

// var Exibitor=[];
// var x=document.getElementsByClassName("slick-cell")
// for(let nameItem of x){
//     // console.log(nameItem);
//     if (nameItem.innerText != '' ){          

 
//     Exibitor.push({'Exibitor': nameItem});
// }
// }
// console.log(Exibitor);

//------------------------------------------------------------or-----------------------------------


/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.js"></script> // cdn for jqueary */}
// var Exibitor=[];
// var x=document.getElementsByClassName("slick-cell l1 cell-text")
// for(let nameItem of x){
//      console.log(nameItem.innerText);      

//     Exibitor.push({'Exibitor':nameItem.innerText});
// }


// console.log(Exibitor);
    
