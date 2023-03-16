Link : https://www.expocadweb.com/23ims/Integration/EC/JsonService.asmx/GetPackage2             ............SandDIEGO 2023.........
// Step 1

// Step 2

var Expo = [];
$.ajax({
    type: "POST",
    url: 'https://www.expocadweb.com/23ims/Integration/EC/JsonService.asmx/GetPackage2',
    data: {},
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
        // console.log(data)
        $.each(data, function (index, item) {
            console.log(item.e)
            for (let i = 0; i < item.e.length; i++) {

                Expo.push({ "Exhibitor_name": item.e[i][3], "Booth_Name": item.e[i][18], "Description": item.e[i][20], "Website_URL": item.e[i][21], "Phone_no": item.e[i][15], "Country": item.e[i][14], "Location": item.e[i][8], "Address": item.e[i][10] })
            }
        });
    }
});
console.log(Expo);

// After Fiter Array HIT Array on Console.