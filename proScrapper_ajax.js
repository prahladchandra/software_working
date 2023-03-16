//  Expo Website using ajax call .........through network tab.

$.get("https://tass23.expofp.com/data/data.js", function (response) {
    eval(response); //This will create a varible name __data
    window.tasExhibitors = [];
    window.tasBooths = [];
    window.tasCategories = [];
    //map exhibitors
    __data.exhibitors.forEach((exhibitor) => {
        window.tasExhibitors.push(exhibitor);
    });
    //map booths
    __data.booths.forEach((booth) => {
        if (booth.exhibitors === undefined)
            return;
        window.tasBooths.push(booth);
    });
    //map categories
    __data.categories.forEach((category) => {
        window.tasCategories.push(category);
    });
});

// tasExhibitors execute
// filtered array:
const assem = [];
for (var i = 0; i < tasExhibitors.length; i++) {
    // if(tasExhibitors[i] != undefined){
    assem.push({
        "Name": tasExhibitors[i].name,
        "City": tasExhibitors[i].city,
        "Website": tasExhibitors[i].website,
        "Email": tasExhibitors[i].email,
        "VidioURL": tasExhibitors[i].videoUrl,
        "Mobile_Numb": tasExhibitors[i].phone1

    })
    // }    

}
console.log(assem)






// 2..Method     URL:https://himss23.mapyourshow.com/8_0/floorplan/?hallID=S


function loadRawExhibitors(target, offset) {
    function getSearch() {
        var match = window.location.href.match(/searchtype\/show\/search\/(.+?)\//);
        return match ? decodeURI(match[1]) : null;
    }

    var search = getSearch();
    var data = search ? {
        action: "search",
        search: search,
        searchtype: "show",
        show: "all"
    } : {
        action: "search",
        search: "*",
        searchtype: "exhibitoralpha",
        start: offset || 0,
        show: "exhibitor"
    }

    $.get(window.location.origin + "/8_0/ajax/remote-proxy.cfm", data).done((e) => {
        var ex = e.DATA.results.exhibitor;

        target.push.apply(target, ex.hit);

        if (target.length < ex.found) {
            loadRawExhibitors(target, target.length);
        }
    });

};
window.rawExhibitors = [];
loadRawExhibitors(window.rawExhibitors);



// URL :  https://sff2023.mapyourshow.com/8_0/exhview/index.cfm                   Wor




[{"hallid":"B","booth":"5444","exhname":"The Southern Art Company, LLC","exhid":"118611","showcustid":1762757,"sort":1,"boothdims":"10 x 10","displayorder":1,"boothdisplay":"5444"}] 
// https://sff2023.mapyourshow.com/8_0/exhview/02/_exh-remote-proxy.cfm?action=getExhibitorsInBooth&booth=5444&hallid=B&_=1675745053419




// for name

$.ajax({
    type: "get",
    url: 'https://sff2023.mapyourshow.com/8_0/exhview/02/_exh-remote-proxy.cfm?action=getExhibitorNames&_=1675766944592',
    data: "check",
    success: function(response){
        console.log(response);
    }
});

// for all dataaa on page;
$.ajax({
    type: "get",
    url: 'https://sff2023.mapyourshow.com/8_0/exhview/02/_exh-remote-proxy.cfm?action=GetBoothByHall&method=GetBoothByHall&showid=SFF2023&regid=0&selectedbooth=&hallid=B&_=1675766944581',
    data: "check",
    success: function(response){
        console.log(response);
    }
});


//  ddata after very

// https://sff2023.mapyourshow.com/8_0/floorplan/02/_remote-proxy.cfm?action=GetBoothByHall&method=GetBoothByHall&showid=SFF2023&regid=0&selectedbooth=&hallid=A&_=1675847636938
$.ajax({
    type: "get",
    url: 'https://sff2023.mapyourshow.com/8_0/exhview/02/_exh-remote-proxy.cfm?action=getExhViewBoothResults&hallID=&pavilion=&boothtypeid=&availableonly=false&boothsizefrom=&boothsizeto=&orsearchtype0=exhibitor&orsearchvalue0=132023&orsearchcount=1&_=1675773739215',
    data: "check",
    success: function(response){
        console.log(response);
    }
});




// loop 




var exhi=[];
$.ajax({
    type: "get",
    url: 'https://sff2023.mapyourshow.com/8_0/exhview/02/_exh-remote-proxy.cfm?action=getExhibitorNames&_=1675766944592',
    data: {},
    success: function (response) {

        

        var result = response;
        for (var i = 0; i < result.length; i++) {
            exhi.push(result[i].fielddisplay);
        }
        // console.log(result);
    }


});



//------------------------------------------------------------------------------
// var exhi=[];

// var singlevalue;
// for(let item of exhi){

//     singlevalue = item;
// }
// $.ajax({
//     type: "get",
//     url: 'https://sff2023.mapyourshow.com/8_0/exhview/02/_exh-remote-proxy.cfm?action=getExhibitorNames&_=1675766944592',
//     data: {},
//     success: function (response) {      

//         var result = response;
//         for (var i = 0; i < result.length; i++) {
//             exhi.push(result[i].fieldvalue);
//         }

//     },complete: function(){
        
//     }
// });

// var exhi = [];

// var singlevalue;
// for (let item of exhi) {

//     singlevalue = item;

//     document.write(singlevalue)
// }
// $.ajax({
//     type: "get",
//     url: 'https://sff2023.mapyourshow.com/8_0/exhview/02/_exh-remote-proxy.cfm?action=getExhibitorNames&_=1675766944592',
//     data: {},
//     success: function (response) {

//         var result = response;
//         for (var i = 0; i < result.length; i++) {
//             exhi.push(result[i].fieldvalue);
//         }

//     }, complete: function () {
//         $.ajax({
//             type: "get",
//             url: 'https://sff2023.mapyourshow.com/8_0/exhview/index.cfm?orsearchtype0=exhibitor&orsearchvalue0=singlevalue&orsearchdisplay0=Exhibitor&orsearchvaluedisplay0=3%20Little%20Pigs%20%2F%20Les%20Trois%20Petits%20Cochons',
//             success: function (response) {

//             }

//             })
//         }
//     });


// ===========================
var exhibitor=[];

var exhi = [];

var singlevalue;
for (let item of exhi) {

    singlevalue = item;

    document.write(singlevalue)
}
$.ajax({
    type: "get",
    url: 'https://sff2023.mapyourshow.com/8_0/exhview/02/_exh-remote-proxy.cfm?action=getExhibitorNames&_=1675766944592',
    data: {},
    success: function (response) {

        var result = response;
        for (var i = 0; i < result.length; i++) {
            exhi.push(result[i].fieldvalue);
        }

    }, complete: function () {
        $.ajax({
            type: "get",
            url: 'https://sff2023.mapyourshow.com/8_0/exhview/index.cfm?orsearchtype0=exhibitor&orsearchvalue0=singlevalue&orsearchdisplay0=Exhibitor&orsearchvaluedisplay0=3%20Little%20Pigs%20%2F%20Les%20Trois%20Petits%20Cochons',
            success: function (response) {
                var result2 = response;
                exhibitor.push( result2)

            //     for (var i = 0; i < result2.length; i++) {
            // exhibitor.push(result2[i]);
      
                

            }

            })
        }
    });
 

































$.ajax({
    type: "get",
    url: 'https://img14.a2zinc.net/api/exhibitor? callback=jQuery211007031160726748209_1675920400290&mapId=10&eventId=10&appId=K0IqZr095TmYcdJlD%2FkyQk18qC7gNseAghWYZIAy1paX3msbGOHgAYeD2JO%2Fw7%2Fj&floorplanViewType=VIEW4&langId=1&boothId=&shMode=&minLblSize=2&maxLblSize=10&minCnSize=2&maxCnSize=11&_=1675920400295',
    data: "check",
    success: function (response) {
        console.log(response)



      
    }


});

























































0



$.ajax({
    type: 'POST',
    url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%20%3D%20'www.meilleurmobile.com%2Fcomparateur%2Fresultats-comparateur-json.do%3FmonthDur%255B0%255D%3D45.75%26monthDur%255B1%255D%3D45.75%26monthDur%255B2%255D%3D45.75%26monthDur%255B3%255D%3D45.75%26monthDur%255B4%255D%3D45.75%26monthDur%255B5%255D%3D45.75%26monthDur%255B6%255D%3D45.75%26monthDur%255B7%255D%3D45.75%26monthDur%255B8%255D%3D45.75%26monthDur%255B9%255D%3D45.75%26monthDur%255B10%255D%3D45.75%26monthDur%255B11%255D%3D45.75%26numSms%3D1000%26dataVolume%3D1000%26withoutMobile%3D-1%26commitmentDuration%3D-1%26_%3D1329825461536'&format=json&diagnostics=true",
    async: false,
    cache: false,
    crossDomain: true,
    dataType: 'jsonp',
    error: function( xhr,err ) {
        console.log( 'Sample of error data:', err );
        console.log("readyState: "+xhr.readyState+"\nstatus: "+xhr.status+"\nresponseText: "+xhr.responseText);
    },
    success: function( data, status ) {
        if (console && console.log) {
            console.log( 'data count:', data.query.results.json.json.length );
            $('#result-count').text( JSON.stringify(data.query.results.json.json) );
        }
    },
    jsonpCallback: 'swatCallback'
})
.done(function() { alert("success"); })
.fail(function() { alert("error"); }); 



window['swatCallback'] = function(data) {
    var info = data.query.results.json.json;
    $('#callback_result_operator').html(info[0].operator);
};
















$.ajax({
    type: 'GET'
    , url: "https://img14.a2zinc.net/api/exhibitor?callback=jQuery21105158601835716092_1675940983557&mapId=10&eventId=10&appId=K0IqZr095TmYcdJlD%2FkyQk18qC7gNseAghWYZIAy1paX3msbGOHgAYeD2JO%2Fw7%2Fj&floorplanViewType=VIEW4&langId=1&boothId=&shMode=&minLblSize=2&maxLblSize=10&minCnSize=2&maxCnSize=11&_=1676011658033&callback=jQuery11240639701532592267_1676011658029"
    , dataType: 'jsonp'     //Besides plain xml, the dataType can be html, json, jsonp, script, or text.
    , jsonp: 'callback'     //this will be added in the query as parameter
    , jsonpCallback: 'jsonp_reply'  //this is what ajax call is expecting json to be encapsulated ine i.e. json_reply(JSON_RESPONSE)
    , data: {
         uniq_val: prevent_caching
        , method_name: "get_all_tasks"
        , format: 'jsonp'
    }
    , cache: false
    , async: false
})
.success(function (rsp) {
    console.log('success'+rsp);
})
.fail(function (xhr, error, thrownError) {
    console.log('fail  status:[' + xhr.status + ']  error:[' + thrownError + ']');
})
.always(function () {
    console.log('complete');
});




$.ajax({

    crossOrigin: true,
    type: "POST",
   
    url: 'https://platform.cloud.coveo.com/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7B1DF9DBBE-D8DE-403A-A0FF-1170D3E2BDC6%7D%3Flang%3Den%26amp%3Bver%3D1&siteName=RSAC-PROD-CD',
    
    dataType: "json", 
  
    beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ2OCI6dHJ1ZSwib3JnYW5pemF0aW9uIjoicnNhY3Byb2Q4bXlseTRraiIsInVzZXJJZHMiOlt7InByb3ZpZGVyIjoiRW1haWwgU2VjdXJpdHkgUHJvdmlkZXIiLCJuYW1lIjoiYW5vbnltb3VzIiwidHlwZSI6IlVzZXIifV0sInJvbGVzIjpbInF1ZXJ5RXhlY3V0b3IiXSwiZXhwIjoxNjc3OTE5ODgwLCJpYXQiOjE2Nzc4MzM0ODB9.P2HRjGLQ3rRkHuJ49cu8KiASgNttFEIt7XDDdYxdGPg");
    },
    success: function (result, status, xhr) {
     
      console.log(result)
  
           
      }
  })