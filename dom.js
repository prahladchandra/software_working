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




// ArcgateData = []
// const text1 = $(".ourteam").find(" h2:first").text();
// const text2 = $(".clientacquired").find("p").text();
// const text3 = $(".parallax-bg ").find("p").text();
// const text4 = $(".dataprocessing").find("h1").text();
// const text5=$(".open").find("nav ul:first").text();
// const myArraywe=text5.split("\n")

// var newArray = myArraywe.filter(function(v){return v!==''});


  
//   ArcgateData.push({ "Text": text1, "Text2": text2, "Text3": text3, "Text4": text4 ,"Text5":myArray})

// console.log(ArcgateData)










// $(".blog_pic").find("a").attr('href');
//  arcgate 3 youtube vidio
// const links=$(".masonry-video-container").find("a");
// for(let i=0; i<links.length; i++){
//     console.log($(".masonry-video-container").find("a").eq(i).attr('href'))

// }

// // arcgate all youtube vidio
// const links=$(".video-bloglist").find("a");
// for(let i=0; i<links.length; i++){
//     console.log($(".video-bloglist").find("a").eq(i).attr('href'))

// }
// .map function used................................................

// const youtube1 = links.map(function(index,el){
//   return el.href
// })
// console.log(youtube1)



// ArcgateData = []
// const text1 = $(".ourteam").find(" h2:first").text();
// const text2 = $(".clientacquired").find("p").text();
// const text3 = $(".parallax-bg ").find("p").text();
// const text4 = $(".dataprocessing").find("h1").text();
// const text5 = $(".open").find("nav ul:first").text();
// const myArraywe = text5.split("\n")
// var newArray = myArraywe.filter(function (el) {

//   return el != null && el != "";

// });
// const links = $(".masonry-video-container").find("a");

// const youtube1 = links.map(function(index,el){
//   return el.href
// })


// ArcgateData.push({ "Text": text1, "Text2": text2, "Text3": text3, "Text4": text4, "Text5": newArray, "youtube1": youtube1 , "youtube2": })

// console.log(ArcgateData)



ArcgateData = []
const text1 = $(".ourteam").find(" h2:first").text();
const text2 = $(".clientacquired").find("p").text();
const text3 = $(".parallax-bg ").find("p").text();
const text4 = $(".dataprocessing").find("h1").text();


const links = $(".masonry-video-container").find("a");

const youtube1 = links.map(function(index,el){
  return el.href
})

const links2= $(".arc-life-gallery").find("a");
const youtube2 = links2.map(function(index,el){
  return el.href
})

const text5 = $("header").find("nav ul:first").text();
const myArraywe = text5.split("\n")
var newArray = myArraywe.filter(function (el) {

  return el != null && el != "";

});


// const text5 = $("header").find(" a")

// const youtube1 = text5.map(function(index,el){
//      // console.log("hiiii",youtube1)
//   return el.href
// })

// console.log(youtube1)



ArcgateData.push({ "Text": text1, "Text2": text2, "Text3": text3, "Text4": text4, "Text5": newArray, "youtube1": youtube1 ,"youtube": youtube2 })

console.log(ArcgateData)




















// function ValidEmail(str, phone) {

//   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//   if (str.match(validRegex)) {

//     return true;

    

//   } else {

//     return false;
//   }
  
  

// }
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

    return "email";

  } else if (phone.match(validphone)) 
        {
         return  "phone";
        }
   else {
     return false;

  }
}
var email1 = ValidEmail("prahlad@gmail.com", "8209880442")
console.log(email1, phone)








































