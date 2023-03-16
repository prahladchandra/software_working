// var hpkt = [];
// var data = [];
var exhi = [];
$.ajax({
    type: "get",
    url: 'https://himss23.mapyourshow.com/8_0/floorplan/02/_remote-proxy.cfm?action=GetBoothByHall&hallID=S&selectedbooth=2643&objectType=booth&_=1676625745190',
    data: "jsonp",
    success: function (response) {

        var result = response;
        for (var i = 0; i < result.length; i++) {
            exhi.push(result[i].HALLID);
        }

        // for (let i = 0; i < exhi.length; i++) {
        //     $.ajax({
        //         type: "GET",
        //         url: "https://www.highpointmarket.org" + exhi[i],
        //         success: function (response) {
        //             var result1 = response;
        //             var text1 = $(response).find(".exhibitor-contain").find("h1").text();
        //             var text2 = $(response).find("span.d-flex").text();

        //              var street = $(response).find("p:nth-child(1) > span:nth-child(2)").text();
        //              var landmark = $(response).find("p:nth-child(1) > span:nth-child(3)").text();
        //              var phone = $(response).find("span:nth-child(4)").text();
        //             var text6 = $(response).find(".info-block").find(" p:nth-child(3)").text();
        //             var text7 = $(response).find(".col-12").find("p").text();

        //             hpkt.push({ "Exihibior_NAME":text1, "Location":text2.trim(),"Address":text2.trim(),"loction":street.replace(/\n\s/g,''),"Landmark":landmark.trim(),"Phone_no": phone,"WebsiteURL": text6.trim(),"Discriptions": text7.trim() })

        //         }
        //     });
        // }
    }
});
// console.log(hpkt)


$.ajax({
    type: "GET",
    url: 'https://himss23.mapyourshow.com/8_0/floorplan/02/_remote-proxy.cfm?action=GetBoothByHall&hallID=S&selectedbooth=2643&objectType=booth&_=1676625745190',
    data: "jsonp",
    success: function(response){
        console.log(response);
    }
});