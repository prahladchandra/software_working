// const text1 = $(".ourteam").find(" h2:first").text();
// const text2 = $(".clientacquired").find("p").text();
// const text3 = $(".parallax-bg ").find("p").text();
// const text4 = $(".dataprocessing").find("h1").text();
// const links = $(".masonry-video-container").find("a");

// const youtube1 = links.map(function (index, el) {
//   return el.href
// })

// const links2 = $(".arc-life-gallery").find("a");
// const youtube2 = links2.map(function (index, el) {
//   return el.href
// })

// const text5 = $("header").find("nav ul:first").text();
// const myArraywe = text5.split("\n")
// var newArray = myArraywe.filter(function (el) {

//   return el != null && el != "";

// });

// const text6 = $("header").find(" nav ul li a")

// const navbarlink = text6.map(function (index, el) {

//   return el.href
// })



// ArcgateData.push({
//   "Text": text1,
//   "Text2": text2,
//   "Text3": text3,
//   "Text4": text4,
//   "Text5": newArray,
//   "url": navbarlink,
//   "youtube1": youtube1,
//   "youtube2": youtube2
// })

// console.log(ArcgateData)





// ---------------------------------
// ArcgateData = []
// const text1 = $(".ourteam").find(" h2:first").text();
// const text2 = $(".clientacquired").find("p").text();
// const text3 = $(".parallax-bg ").find("p").text();
// const text4 = $(".dataprocessing").find("h1").text();
// const links = $(".masonry-video-container").find("a");

// const youtube1 = links.map(function(index,el){
//   return el.href
// })

// const links2= $(".arc-life-gallery").find("a");
// const youtube2 = links2.map(function(index,el){
//   return el.href
// })

// const text6 = $("header").find("nav ul a")
// const navbarlink = text6.map(function(index,el){
   
//     return el.text + " " + el.href
   
// })
// ArcgateData.push({
//     "Text": text1,
//     "Text2": text2,
//     "Text3": text3,
//     "Text4": text4,
//     "Name":navbarlink,        
//     "youtube1": youtube1 ,
//     "youtube2": youtube2 })

// console.log(ArcgateData)


// OR DOne------------------------------------------------------------------------------------------------
// ArcgateData = [];
// const text1 = $(".ourteam").find(" h2:first").text();
// const text2 = $(".clientacquired").find("p").text();
// const text3 = $(".parallax-bg ").find("p").text();
// const text4 = $(".dataprocessing").find("h1").text();
// const links = $(".masonry-video-container").find("a");

// const youtube1 = links.map(function (index, el) {
//   return el.href
// })

// const links2 = $(".arc-life-gallery").find("a");
// const youtube2 = links2.map(function (index, el) {
//   return el.href
// })

// const text6 = $("header").find("nav ul li a")
// // const mynewArraywe = text6.remove("\n\n")
// // var newArray = mynewArraywe.filter(function (el) {
// //   return el != null && el != "";

// // });

// const abcd=[]
// var navbarlinks = $.each(newArray, function (Name, value) {
//   abcd.push({ "Name": value.text.replace(/\n\s/g,''), "URL": value.href });
    
// })
// ArcgateData.push({
//   "Text": text1,
//   "Text2": text2,
//   "Text3": text3,
//   "Text4": text4,
//   "youtube1": youtube1,
//   "youtube2": youtube2,
//    "text5": abcd
// })

// console.log(ArcgateData)



// --------------------------------
ArcgateData = [];
const text1 = $(".ourteam").find(" h2:first").text();
const text2 = $(".clientacquired").find("p").text();
const text3 = $(".parallax-bg ").find("p").text();
const text4 = $(".dataprocessing").find("h1").text();
const links = $(".masonry-video-container").find("a");
const youtube1 = links.map(function (index, el) {
return el.href
})
const links2 = $(".arc-life-gallery").find("a");
const youtube2 = links2.map(function (index, el) {
return el.href
})
const text6 = $("header").find("nav ul li a")
// const mynewArraywe = text6.remove("\n\n")
// var newArray = mynewArraywe.filter(function (el) {
//   return el != null && el != "";
// });
const abcd=[]
var navbarlinks = $.each(text6, function (Name, href) {
abcd.push({ "Name": href.text.replace(/\n\s/g,''), "URL": href.href });
})
ArcgateData.push({
"Text": text1,
"Text2": text2,
"Text3": text3,
"Text4": text4,
"youtube1": youtube1,
"youtube2": youtube2,
"texy5": abcd
})
console.log(ArcgateData)








// demooooooooooooooooooooooooooooooooooo
const abcd=[]

const text2 = $(".clientacquired").find("p").text();

const text6 = $("header").find("nav ul li a")
var navbarlinks = $.each(text6, function (Name, href) {
abcd.push({ "Name": href.text, "URL": href.href });
})


abcd.push({"NameCaption":,"URL":})



// pratice in jquery



const text2 = $(".insipiringCardContent").find("p").text();
console.log(text2.substring(0, text2.indexOf(",")));


//  