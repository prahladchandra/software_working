var tag = document.createElement('script');
tag.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
tag.type = 'text/javascript';
document.body.appendChild(tag);
var Salon = [];
for (let i = 1; i <= 135; i++) {
    $.ajax({
        corsorigin: true,
        type: "POST",
        url: 'https://hzh2dgp2ke.execute-api.eu-west-1.amazonaws.com/main/exhibitorSearch',
        data: JSON.stringify({ params: 'anno=2023&pageSize=9&pageNumber=' + i + '' }),


        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            Salon.push(response.data)

        }
    });
}
console.log(Salon);














$.ajax({
    type: 'POST',
      dataType:"json",
      
    url: 'https://www.rsaconference.com/usa/expo-and-sponsors',
        data: JSON.stringify("8d478419-da25-4036-b39a-b418b1bfb0c4"),
    headers:{         
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
        
    },
    success: function (data, status, xhr) {
      
        var result1 = $(data).find(".CoveoResultList");
        console.log(result1);
  
    }
  });