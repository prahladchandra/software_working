// target URL: https://iddba.expocad.com/Events/v2iddba/index.html

// Hits
// expocadfx.fxData.exhibitors    Arra
// expocadfx.fxData.booths



const IDDBA = [];
for (var i = 0; i < expocadfx.fxData.exhibitors.length; i++) {  
       IDDBA.push({
        "Name": expocadfx.fxData.exhibitors[i].name,
        "Booth": expocadfx.fxData.exhibitors[i].boothNumber,
         "ID": expocadfx.fxData.exhibitors[i].exhId,           
    }) 
}