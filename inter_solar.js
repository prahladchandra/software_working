var arr=[];
for (let i = 1; i <= 24; i++){
$.ajax({
        crossOrigin: true,
        type: "POST",
        url: 'https://www.intersolar.de/search/execute',
        data: JSON.stringify({page: + i + "", menuPageId: "5f5b269c1109ff53da1c9fe2", menuPageTypes: ["5ef3588ed984e36063189652"]}),   
        beforeSend: function (xhr) {
        xhr.setRequestHeader ('X-CSRF-Token','13ce5e07-35b8-4daa-b9b8-38b5de7a87ec');
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {       

                 var text1 = $(response).find(".teaser-header").find('h1');
            for (let item of text1){
                arr.push($(item).text().toLowerCase())
            }


            // arr.push(text1)

        }
    });
}













// URL

var arr=[];
for (let i = 1; i <= 24; i++){
$.ajax({
        crossOrigin: true,
        type: "POST",
        url: 'https://www.intersolar.de/search/execute',
         data: JSON.stringify({page: + i + "", menuPageId: "5f5b269c1109ff53da1c9fe2", menuPageTypes: ["5ef3588ed984e36063189652"]}),   
        beforeSend: function (xhr) {
        xhr.setRequestHeader ('X-CSRF-Token','f73de213-07dd-4f95-8648-41272d09860e');
           
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {       

         var text1 = $(response).find(".content-data");
            console.log(text1.prevObject[0].href,"asd")
           

        } 
});
}





var arr=[];
for (let i = 1; i <= 24; i++){
$.ajax({
        crossOrigin: true,
        type: "POST",
        url: 'https://www.intersolar.de/search/execute',
        data: JSON.stringify({page: + i + "", menuPageId: "5f5b269c1109ff53da1c9fe2", menuPageTypes: ["5ef3588ed984e36063189652"]}),   
        beforeSend: function (xhr) {
        xhr.setRequestHeader ('X-CSRF-Token','ca54334f-947b-4d14-8f8f-8a44e85f5e8f');
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {       

          var text1 = $(response).find(".content-search-main").find("a").text()
           console.log(text1)
            // for(let item of text1){
            //     console.lo(item.baseURI)
            // }

            // console.log(text1.href)

        }
    });
}










var arr=[]
var c =$(".content-data").find("a")
console.log(c)
for(let item of c){
    arr.push(item.href)
}
console.log(arr)






// ______link  
var c=$(".content-data").find("a")
console.log(c)
for (let item of c){
    console.log($(item).attr("href"))
}









var arr=[];
var c=$(".content-data").find("a")
console.log(c)
for (let item of c){
    var solar = (window.location.origin + $(item).attr("href"))


    console.log(solar)

     
    // $.ajax({
    //             type: "GET",
    //             url: "solar",
    //     beforeSend: function (xhr) {
    //     xhr.setRequestHeader ('X-CSRF-Token','430f5ac3-93a8-4ec1-afcc-f4aac7648c6d');
    //     },
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //             success: function (response) {

    //                console.log(response)
    //                   var text1 = $(response).find(".teaser-header").find('h1');
    //         for (let item of text1){
    //             arr.push($(item).text().toLowerCase())
    //         }
    //             }
    //         });
}










// Single page get Conntent


var arr = [];
$.ajax({
    crossOrigin: true,
    type: "GET",
    url: 'https://www.intersolar.de/exhibitorlist/ap-sensing-gmbh?ref=m5f5b269c1109ff53da1c9fe2-t1679398625-c3bc226f4',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('X-CSRF-Token', 'b38051d2-2b49-49ec-9ce8-70054f6d0d22');
    },
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    success: function (response) {

        var name = $(response).find(".content-data-headline").find('h1').text();
        var booth = $(response).find(".floatcontainer").find('p:nth-child(2)').text();
        var mobile = $(response).find(".teaser-information").find('dt:nth-child(1)').text();
        var Address = $(response).find(".teaser-information").find('dt:nth-child(5)').text();

        arr.push({ "Name": name, "Booth": booth, "Mobile": mobile, "Address": Address })

    }
});




var arr1=[];
var c=$(".content-data").find("a")
for (i=0; i<= arr.length; i++){
    if(arr[i] != "#"){
        arr1.push(arr[i])
    }
}

//  All Href links  
var arr1 = [];
var arr = $(".content-data").find("a")
for (i = 0; i <= arr.length; i++) {
    arr1.push(window.location.origin + $(arr[i]).attr("href"))
    console.log(solar)
}



// Element filter.

var arr = []
var name = $(".content-data-headline").find('h1').text();
var booth = $(".floatcontainer").find('p:nth-child(2)').text();
var mobile = $(".teaser-information").find('dt:nth-child(1)').text();
var Address = $(".teaser-information").find('dt:nth-child(5)').text();

arr.push({ "Name":name,"Booth": booth, "Mobile": mobile, "Address": Address });