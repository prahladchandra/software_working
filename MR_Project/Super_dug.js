// Target URL:https://s15.a2zinc.net/clients/hartenergy/permian23/public/EventMap.aspx
const Super_Dug = [];
for (var i = 0; i < boothsInthisTile.length; i++) {
     if(boothsInthisTile[i].name != '' && boothsInthisTile[i].name != 'Sponsorship Required (Available)'){
       Super_Dug.push({
        "Name": boothsInthisTile[i].name,
        "Booth": toArray(boothsInthisTile[i].boothName.lines),
        "Dimension": boothsInthisTile[i].dimension,
        "Size": boothsInthisTile[i].size + ' ' + boothsInthisTile[i].unit
        // "Unit": boothsInthisTile[i].unit,

    })
 }    

}
 function toArray(items) {
      let newItem = ""
      for (let value of items) {
        // console.log(newItem,'...............')
        newItem += value + ","
      }
      return newItem
    }
console.log(Super_Dug)