var inter_solar = [];
var arr1 = [];
var arr = $(".content-data").find("a")
for (i = 0; i <= arr.length; i++) {
    var solar = ($(arr[i]).attr("href"))
    // console.log(solar)
    $.ajax({
        type: "GET",
        url: 'https://www.intersolar.de/' + solar,

        beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CSRF-Token','dcf24490-1278-465b-971f-f66c0413d3e6');
        },
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        success: function (response) {
            // console.log(response.data)
            var name = $(response).find(".content-data-headline").find('h1').text();
            var booth = $(response).find(".floatcontainer").find('p:nth-child(2)').text();
            var mobile = $(response).find(".teaser-information").find('dt:nth-child(1)').text();
            var Address = $(response).find(".teaser-information").find('dt:nth-child(5)').text();
            inter_solar.push({ "Name": name, "Booth": booth, "Mobile": mobile, "Address": Address })
        }
    })
}
