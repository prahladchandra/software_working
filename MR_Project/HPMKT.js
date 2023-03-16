var hpkt = [];
$.ajax({
    type: "get",
    url: 'https://www.highpointmarket.org/api/exhibitors/autocomplete',
    data: 'json',
    success: function (response) {

        for (var i = 0; i < response.length; i++) {
            var av = (response[i].value);
            $.ajax({
                type: "GET",
                url: "https://www.highpointmarket.org" + av,
                success: function (response) {

                    var text1 = $(response).find(".exhibitor-contain").find("h1").text();
                    var text2 = $(response).find("span.d-flex").text();

                    var street = $(response).find("p:nth-child(1) > span:nth-child(2)").text();
                    var landmark = $(response).find("p:nth-child(1) > span:nth-child(3)").text();
                    var phone = $(response).find("span:nth-child(4)").text();
                    var text6 = $(response).find(".info-block").find(" p:nth-child(3)").text();
                    var text7 = $(response).find(".col-12").find("p").text();

                    hpkt.push({ "Exihibior_NAME": text1, "Location": text2.trim(), "Address": street.trim(), "Landmark": landmark.trim(), "Phone_no": phone, "WebsiteURL": text6.trim(), "Discriptions": text7.trim() })

                }
            });
        }
    }
});