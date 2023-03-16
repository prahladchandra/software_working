// var workmob=[];
// var x=document.getElementsByClassName("col-6 col-md-3 mb-sm-5 mb-2 mt-2 px-xl-5 px-md-3 px-1 insipiringCardContent")
// console.log(x)
// for (let item of x){
// workmob.push({"url":item.href})
// }
// console.log(workmob)


// var workmob=[];
// var x=document.getElementsByClassName("insipiringCardContent")
// console.log(x)
// for (let item of x){
// workmob.push({"url":item.href})
// }
// console.log(workmob)




// 

// Arilines
var workmob=[];
var x=document.getElementsByClassName("col-6 col-md-3 mb-sm-5 mb-2 mt-2 px-xl-5 px-md-3 px-1 insipiringCardContent")
console.log(x)
for (let item of x){
workmob.push({"url":item.href})
}
console.log(workmob)


// Arts
var Arts=[];
var x=document.getElementsByClassName("col-6 col-md-3 mb-sm-5 mb-2 mt-2 px-xl-5 px-md-3 px-1 insipiringCardContent")
console.log(x)
for (let item of x){
Arts.push({"url":item.href})
}
console.log(Arts)
// Restro
var Restro=[];
var x=document.getElementsByClassName("col-6 col-md-3 mb-sm-5 mb-2 mt-2 px-xl-5 px-md-3 px-1 insipiringCardContent")

for (let item of x){
Restro.push({"NAME":item.text ,"url":item.href })
}
console.log(Restro)




// Advertise
var Adv=[];
var x=document.getElementsByClassName("col-6 col-md-3 mb-sm-5 mb-2 mt-2 px-xl-5 px-md-3 px-1 insipiringCardContent")

for (let item of x){
Adv.push({"url":item.href ,"Name":item.text})
}
console.log(Adv)

//  arclogy
const Arc = $(".container-fluid").find("a");
const arclogy = Arc.map(function (index, el) {

return el.href
})
console.log(arclogy)



//  Architecture


var Architecture=[];
var x=document.getElementsByClassName("insipiringCardContent")

for (let item of x){
Architecture.push({"url":item.href,"Name":item.text})
}
console.log(Architecture)




// page 6 Airlines

// var Arilines=[];
// var x=document.getElementsByClassName("col-6 col-md-3 mb-sm-5 mb-2 mt-2 px-xl-5 px-md-3 px-1 insipiringCardContent")

// for (let item of x){
// Arilines.push({"Name": item.text ,"url":item.href})
// }
// console.log(Arilines)



// // Archoplogy
// var Aschaeology=[];
// var x=document.getElementsByClassName("col-6 col-md-3 mb-sm-5 mb-2 mt-2 px-xl-5 px-md-3 px-1 insipiringCardContent")

// for (let item of x){
//     Aschaeology.push({"url":item.href ,"Name":item.text})
// }
// console.log(Aschaeology)


// // wild _ecology

// var wild=[];
// var x=document.getElementsByClassName("col-6 col-md-3 mb-sm-5 mb-2 mt-2 px-xl-5 px-md-3 px-1 insipiringCardContent")

// for (let item of x){
// wild.push({"NAME":item.text ,"url":item.href })
// }
// console.log(wild)


// Automotive
// var Automotive=[];
// var x=document.getElementsByClassName("col-6 col-md-3 mb-sm-5 mb-2 mt-2 px-xl-5 px-md-3 px-1 insipiringCardContent")

// for (let item of x){
// Automotive.push({"url":item.href ,"Name":item.text})
// }
// console.log(Automotive)








// page 2 arile

// const workmobData=[];
// const links = $(".container-fluid").find("a");
// const text1 = links.map(function (index, el) {

// return `${el.href}`
// })
//  console.log(text1)
// // text1.push()

// const linksa = $(".container-fluid").find("a");
// const text2 = linksa.map(function (index, el) {

//     console.log(el.href)
// return el.href
// })


// workmobData.push({"Test": text1,"Test2":text2})
// // console.log(youtube1)








// // 
// const workmobData = [];



// const vidiourl = [];
// const link = $(".inspring-thumbs").find("a")

// var nalinks = $.each(link, function (index, el) {
//     vidiourl.push({ "Vidio_URL": el.href })

// })

// const name = [];
// const text2 = $(".inspring-thumbs").find("div p");
// var navbarlinks = $.each(text2, function (index, el) {
//     name.push({
//         "name": el.__reactEventHandlers$d3nvv1qczxc
//             .children
//     });

// })

// workmobData.push({ "name": name, vidiourl })
// console.log(workmobData)

// // location

// const name=[];
// const text2 = $(".caption-container").find("span");
// var navbarlinks = $.each(text2,function (index ,el) {
// console.log(el.__reactEventHandlers$d3nvv1qczxc
// .children);
    
// })


// // p text of workmob

// const text2 = $(".insipiringCardContent").find("div p ");

// for(let item of text2){
//     console.log(item.innerText)
// }


// ------------------------------------------------------------
// comma [,] seprate name 

// const name = [];

// const text2 = $(".insipiringCardContent").find("div p ");

// for(let item of text2){
//     var name6=(item.innerText.split(','))
//     console.log(name6[0])
// }
// console.log(name)


// ---------------------------------------------------------------------------------------
const workmobData = [];
const vidiourl = [];
const link = $(".inspring-thumbs").find("a")

var nalinks = $.each(link, function (index, el) {
    vidiourl.push({ "Vidio_URL": el.href })

})

const name = [];

const text2 = $(".insipiringCardContent").find("div p ");

for (let item of text2) {
    var name6 = (item.innerText.split(','))
    name.push(name6[0])



}


const loc = [];

const text3 = $(".insipiringCardContent").find("div > div > span:nth-child(2)");

for (let item of text3) {
    if (item.innerText != '') {
        loc.push(item.innerText)
    }

}

const compny = []
const text4 = $(".insipiringCardContent").find("div > div > span.d-flex.align-items-center.location.px-0.px-md-2.small.mb-1.mt-0.mr-0");

for (let item of text4) {
    var cmp = (item.innerText.split(','))

    compny.push(cmp)
}

workmobData.push({ "Name": name, "URL": vidiourl, "Location": loc, "Company": compny })
console.log(workmobData)




