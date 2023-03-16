
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js';
    document.head.appendChild(s);

    var tag = document.createElement('script');
    tag.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    tag.type = 'text/javascript';
    document.body.appendChild(tag);
    var validURL = new RegExp('^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$', 'i');

    const newyork = [];
    for (var i = 0; i < boothsInthisTile.length; i++) {

      if (boothsInthisTile[i].name != '') {
        //  console.log(typeof toArray(boothsInthisTile[i].boothName.lines));
        //  console.log('hello',typeof boothsInthisTile[i].boothName.lines)
        newyork.push({
          'Name': boothsInthisTile[i].name,
          'Size': boothsInthisTile[i].size + ' ' + boothsInthisTile[i].unit,
          'Boothname': toArray(boothsInthisTile[i].boothName.lines),
          'HyperLinkFieldValue': boothsInthisTile[i].hyperLinkFieldValue,
          'isUrlValidate': boothsInthisTile[i]?.hyperLinkFieldValue.match(validURL) ? true : false,
          'Dimension': boothsInthisTile[i].dimension,
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
    console.log(newyork); 