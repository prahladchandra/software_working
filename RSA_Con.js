// Target URL: https://www.rsaconference.com/usa/expo-and-sponsors#numberOfResults=25&f:exhibitortype=[83bb42f7729d47a4bc183bd667eaf1fb]

ajax({

    crossOrigin: true,
   
    url: 'https://platform.cloud.coveo.com/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7B1DF9DBBE-D8DE-403A-A0FF-1170D3E2BDC6%7D%3Flang%3Den%26amp%3Bver%3D1&siteName=RSAC-PROD-CD',
    dataType: "json",  
    success: function (result, status, xhr) {
      var data = result
      console.log(data)
  
           
      }
  })
  function jQuery36005990437104774091_1676985557339(json) {
      // console.log(json)
  }


//   jQuery34102083404199310377_1677043863310&_ new one
// beforeSend: function (xhr) {
//     xhr.setRequestHeader('Authorization', makeBaseAuth(user, pswd));
//  }

// or-------------------------------------------------------------------------------------

$.ajax({

    type: 'POST',
    url: "https://platform.cloud.coveo.com/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7B1DF9DBBE-D8DE-403A-A0FF-1170D3E2BDC6%7D%3Flang%3Den%26amp%3Bver%3D1&siteName=RSAC-PROD-CD",
    data: 'json',
    data: { username: "test" },
    contentType: "application/json; charset=utf-8",


    data: { myval: "test" },
    xhrFields: {
        withCredentials: false
    },
    headers: {
        "Authorization": "BasicCustom"
    },
    success: function (data, textStatus, jqXHR) {
        console.log(data);
    }
});

//  step 2........

function loadRawExhibitors(target, offset) {
    function getSearch() {jQuery34102083404199310377_1677043863310&_
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
        searchtype: "exhibitor",
        start: offset || 0,
        show: "exhibitor"
    }

    $.get(window.location.origin + "/usa/expo-and-sponsors", data).done((e) => {
        var ex = e.results;
        

        target.push.apply(target, e.hit);

        if (target.length < e.found) {
            loadRawExhibitors(target, target.length);
        }
    });

};
window.rawExhibitors = [];
loadRawExhibitors(window.rawExhibitors);
console.log(window.rawExhibitors)



// step 44

$.ajax({
    crosOrigin:true,
     type: 'POST',
     url: "https://platform.cloud.coveo.com/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7B1DF9DBBE-D8DE-403A-A0FF-1170D3E2BDC6%7D%3Flang%3Den%26amp%3Bver%3D1&siteName=RSAC-PROD-CD",
     contentType: "application/json; charset=utf-8",


     // data: {myval:"test"},
  data: [{"name":"Query","time":"\"2023-02-21T12:07:52.874Z\""},{"name":"Query","time":"\"2023-02-21T11:01:18.315Z\""},{"name":"Query","time":"\"2023-02-21T10:49:07.815Z\""},{"name":"Query","time":"\"2023-02-21T10:41:15.131Z\""},{"name":"Query","time":"\"2023-02-21T10:29:15.588Z\""},{"name":"Query","time":"\"2023-02-21T10:27:22.975Z\""},{"name":"Query","time":"\"2023-02-21T10:01:17.102Z\""},{"name":"Query","time":"\"2023-02-21T09:55:22.256Z\""},{"name":"Query","time":"\"2023-02-21T09:31:58.686Z\""},{"name":"Query","time":"\"2023-02-21T09:26:15.395Z\""},{"name":"Query","time":"\"2023-02-21T09:23:08.402Z\""},{"name":"Query","time":"\"2023-02-21T09:13:04.950Z\""},{"name":"Query","time":"\"2023-02-21T09:03:15.207Z\""},{"name":"Query","time":"\"2023-02-21T08:50:21.639Z\""},{"name":"Query","time":"\"2023-02-21T08:46:22.991Z\""},{"name":"Query","time":"\"2023-02-21T08:45:19.752Z\""},{"name":"Query","time":"\"2023-02-21T08:43:26.624Z\""},{"name":"Query","time":"\"2023-02-21T08:18:43.496Z\""},{"name":"Query","time":"\"2023-02-21T07:21:44.846Z\""},{"name":"Query","time":"\"2023-02-21T06:57:14.641Z\""}],
 contentType: "application/json; charset=utf-8",
 dataType: "json",
     xhrFields: {
         withCredentials: true
     },
headers : {
"Authorization" : "BasicCustom"
},
     success: function (data, textStatus, jqXHR) {
         console.log(data);                
     }
 });


































$.ajax({
    type: 'GET',
    url: 'https://platform.cloud.coveo.com/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7B1DF9DBBE-D8DE-403A-A0FF-1170D3E2BDC6%7D%3Flang%3Den%26amp%3Bver%3D1&siteName=RSAC-PROD-CD',
    dataType: 'formdata',
    //whatever you need
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', make_base_auth(user, password));
    },
    success: function (response) {

    }

});


function make_base_auth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return 'Basic ' + hash;
}

















https://hzh2dgp2ke.execute-api.eu-west-1.amazonaws.com/main/exhibitorSearch?callback=jQuery341020644511998449855_1677045292242&_=1677045292250










$.ajax({
    url: "https://platform.cloud.coveo.com/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7B1DF9DBBE-D8DE-403A-A0FF-1170D3E2BDC6%7D%3Flang%3Den%26amp%3Bver%3D1&siteName=RSAC-PROD-CD",
    type: 'POST',

    data: JSON,
    // Fetch the stored token from localStorage and set in the header
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem(eyJhbGciOiJIUzI1NiJ9.eyJ2OCI6dHJ1ZSwib3JnYW5pemF0aW9uIjoicnNhY3Byb2Q4bXlseTRraiIsInVzZXJJZHMiOlt7InByb3ZpZGVyIjoiRW1haWwgU2VjdXJpdHkgUHJvdmlkZXIiLCJuYW1lIjoiYW5vbnltb3VzIiwidHlwZSI6IlVzZXIifV0sInJvbGVzIjpbInF1ZXJ5RXhlY3V0b3IiXSwiZXhwIjoxNjc3Mjk5MDkzLCJpYXQiOjE2NzcyMTI2OTN9.Rr1HEEOSLQJe9TZKiQGPQbkdKewcRVsOOlFyl1xMPyA}`
    }
});


















eyJhbGciOiJIUzI1NiJ9.eyJ2OCI6dHJ1ZSwib3JnYW5pemF0aW9uIjoicnNhY3Byb2Q4bXlseTRraiIsInVzZXJJZHMiOlt7InByb3ZpZGVyIjoiRW1haWwgU2VjdXJpdHkgUHJvdmlkZXIiLCJuYW1lIjoiYW5vbnltb3VzIiwidHlwZSI6IlVzZXIifV0sInJvbGVzIjpbInF1ZXJ5RXhlY3V0b3IiXSwiZXhwIjoxNjc3MzE0MDA5LCJpYXQiOjE2NzcyMjc2MDl9.K2evLcTmbH3CDkYpqoU4RPVoFRHlJiI7H-lHN_RpQ-I




headers: {
    'Accept': 'application/json',
        'Content-Type': 'application/json',
            'JSON-token':'eyJhbGciOiJIUzI1NiJ9.eyJ2OCI6dHJ1ZSwib3JnYW5pemF0aW9uIjoicnNhY3Byb2Q4bXlseTRraiIsInVzZXJJZHMiOlt7InByb3ZpZGVyIjoiRW1haWwgU2VjdXJpdHkgUHJvdmlkZXIiLCJuYW1lIjoiYW5vbnltb3VzIiwidHlwZSI6IlVzZXIifV0sInJvbGVzIjpbInF1ZXJ5RXhlY3V0b3IiXSwiZXhwIjoxNjc3MzE0MDA5LCJpYXQiOjE2NzcyMjc2MDl9.K2evLcTmbH3CDkYpqoU4RPVoFRHlJiI7H-lHN_RpQ-I'
}


$.ajax({
    // corsorigin: true,
    type: "POST",
    url: 'https://platform.cloud.coveo.com/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7B1DF9DBBE-D8DE-403A-A0FF-1170D3E2BDC6%7D%3Flang%3Den%26amp%3Bver%3D1&siteName=RSAC-PROD-CD',
    data : JSON.stringify({"token": "a4a148cb41844166bde0bb173351a812"}),


    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "token": "a4a148cb41844166bde0bb173351a812",
        "Access-Control-Allow-Origin": true
        
    },
    success: function (response) {
        console.log(response.data)

    }
});





// finalay result

var RSA=[];
$.ajax({
    type: "POST",
    headers: {
        // "token": "a4a148cb41844166bde0bb173351a812",
        "Access-Control-Allow-Headers": "application/json, Authorization"

    },
    success: function (response) {
        console.log(response)
         var text3 = $(response).find("span.card-text.font-concrete.link-black > h5")
               console.log("+++++++++",text3)
            

    }
});
console.log(RSA)



// main div

var r=$(".CoveoResultList").find("span.card-text.font-concrete.link-black > h5 a ")
for (let item of r ){
    console.log(item.innerText)
}


// ---------------------------------------------------------------------------------------------------------------------
var RSA=[];
$.ajax({
    url:'https://www.rsaconference.com/usa/expo-and-sponsors',
    type: "POST",
    headers: {
               "Access-Control-Allow-Headers": "application/json, Authorization"
    },
    success: function (response) {
        // console.log(response)
        var r= $(response).find(".CoveoResultList").find("span.card-text.font-concrete.link-black > h5 > a")
        console.log(r)
             // for (let item of r ){
             //          console.log(item.text)
             //        }
    }   
});
console.log(RSA)





var RSA = [];
$('body').append('<div id=result >')
$.ajax({
    url: 'https://www.rsaconference.com/usa/expo-and-sponsors',
    type: "POST",
    headers: {
        "Access-Control-Allow-Headers": "application/json, Authorization"
    },
    success: function (response) {

        var result1 = $('#result').append(response).find(".CoveoResultList").html();


        console.log(result)
        // $('.CoveoResultList').html(result);
        // console.log(response)
        //  var r= $(result).find(".CoveoResultList").find("span.card-text.font-concrete.link-black > h5 > a")
        // console.log(r)
        //      for (let item of r ){
        //               console.log(item.innerText)
        //             }
    }
});
console.log(RSA)









$.ajax({
    type: 'GET',
      dataType:"jsonp",
    url: 'https://www.rsaconference.com/usa/expo-and-sponsors',
    headers:{         
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
        
    },
    success: function (data, status, xhr) {
      console.log('data: ', data);
    }
  });








//   iframe reading..................................................................html


$(function () {  
    $("iframe").load(function () { 
    //    var $iFrameContents = $('iframe').contents(),
    // $entryContent   = $iFrameContents.find('.CoveoResultList');
    //     console.log($iFrameContents)
    //     // frames["content"];
    //     // $('iframe').contents().find('activeElement').prepend(stylesheet);
    
      
}); })  



var kk=$("#coveoc2793fe2").contents().find("span.card-text.font-concrete.link-black > h5 > a")
for(let item of kk){
    console.log(item.innerText)
}
     








$.ajax({
    crossOrigin: true,
    url: 'https://platform.cloud.coveo.com/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7B1DF9DBBE-D8DE-403A-A0FF-1170D3E2BDC6%7D%3Flang%3Den%26amp%3Bver%3D1&siteName=RSAC-PROD-CD',
    async: false,
    headers: {
        "X-Auth-Client": "secret-key",
        "X-Auth-Token": "token",
        "Content-Type": "application/json",
        "cache-control": "no-cache",

    },

    success: (resp) => { json = resp; },
    error: (xhr, status, error) => { console.log(error); }
});






$.ajax({

    crossOrigin: true,
    type: "POST",

    url: 'https://platform.cloud.coveo.com/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7B1DF9DBBE-D8DE-403A-A0FF-1170D3E2BDC6%7D%3Flang%3Den%26amp%3Bver%3D1&siteName=RSAC-PROD-CD',

    dataType: "json",

    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ2OCI6dHJ1ZSwib3JnYW5pemF0aW9uIjoicnNhY3Byb2Q4bXlseTRraiIsInVzZXJJZHMiOlt7InByb3ZpZGVyIjoiRW1haWwgU2VjdXJpdHkgUHJvdmlkZXIiLCJuYW1lIjoiYW5vbnltb3VzIiwidHlwZSI6IlVzZXIifV0sInJvbGVzIjpbInF1ZXJ5RXhlY3V0b3IiXSwiZXhwIjoxNjc3OTE5ODgwLCJpYXQiOjE2Nzc4MzM0ODB9.P2HRjGLQ3rRkHuJ49cu8KiASgNttFEIt7XDDdYxdGP");
    },
    success: function (result, status, xhr) {

        console.log(result)


    }
})



// step-final:
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
  
           
      } })