// Tagret URL:https://expo.semi.org/west2023/Public/EventMap.aspx?shMode=E&MapID=460
var SEMICON = [];
var semi = $(".listTableBody").find("tr")
for (let item of semi) {
    av = ($(item).attr("data-boothid"))

    $.ajax({
        type: "GET",
        url: "https://expo.semi.org/west2023/Public/eBooth.aspx?IndexInList=0&FromPage=Exhibitors.aspx&ParentBoothID=&ListByBooth=true&BoothID=" + av,
        success: function (response) {
            var name = $(response).find(".panel-body").find("h1").text();
            var address1 = $(response).find(".BoothContactAdd1").text();
            var address2 = $(response).find(".BoothContactAdd2").text()
            var city = $(response).find(".BoothContactCity").text();
            var country = $(response).find(".BoothContactCountry").text();
            var courntryZip = $(response).find(".BoothContactZip").text();
            var url = $(response).find(".BoothContactUrl").text();
            var Description = $(response).find(".col-sm-8").find("p").text()


            if (name != '') {
                SEMICON.push({ "Name": name, "address": address1, "Address2": address2, "city": city.trim(), "country": country, "CountryZip": courntryZip, "url": url, "Description": Description })
            }

        }
    });
}