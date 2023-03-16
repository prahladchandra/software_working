var supply = [];
var validURL = new RegExp('^(https?:\\/\\/)?' +
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
  '((\\d{1,3}\\.){3}\\d{1,3}))' +
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
  '(\\?[;&a-z\\d%_.~+=-]*)?' +
  '(\\#[-a-z\\d_]*)?$', 'i');
$.ajax({
  crossOrigin: true,
  url: 'https://img14.a2zinc.net/api/exhibitor?callback=jQuery21106995591011597708_1676022014413&mapId=10&eventId=10&appId=K0IqZr095TmYcdJlD%2FkyQk18qC7gNseAghWYZIAy1paX3msbGOHgAYeD2JO%2Fw7%2Fj&floorplanViewType=VIEW4&langId=1&boothId=&shMode=&minLblSize=2&maxLblSize=10&minCnSize=2&maxCnSize=11&_=1676022014418',
  dataType: "jsonp",
  success: function (result, status, xhr) {
    var data = result
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      if (result[i].name != '' && result[i].name != '.') {
        supply.push({
          ' Exhibitor name ': data[i].name,
          'Size': result[i].size,
          'Boothlocation': result[i].label.text,
          'HyperLinkFieldValue': result[i].hyperLinkFieldValue,
          'isUrlValidate': result[i]?.hyperLinkFieldValue.match(validURL) ? true : false,
          'Dimension': result[i].dimension,
        })
      }
    }
    console.log(supply)

    // Supply.push(result)
    // console.log(result)
  }
});

function jQuery21106995591011597708_1676022014413(json) {
}

// function toArray(items) {
//   let newItem = ""
//   for (let value of items) {
//     // console.log(newItem,'...............')
//     newItem += value + ","
//   }
//   return newItem
// }
// console.log(Supply); 


const text1 = $(".col-md-9").find("ul:nth-child(2)")
// for(let item of text1){

console.log(text1.text())



