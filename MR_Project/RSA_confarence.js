$.ajax({
    crossOrigin: true,
    type: "POST",   
    url: 'https://platform.cloud.coveo.com/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7B1DF9DBBE-D8DE-403A-A0FF-1170D3E2BDC6%7D%3Flang%3Den%26amp%3Bver%3D1&siteName=RSAC-PROD-CD',    
    dataType: "json",   
    beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ2OCI6dHJ1ZSwib3JnYW5pemF0aW9uIjoicnNhY3Byb2Q4bXlseTRraiIsInVzZXJJZHMiOlt7InByb3ZpZGVyIjoiRW1haWwgU2VjdXJpdHkgUHJvdmlkZXIiLCJuYW1lIjoiYW5vbnltb3VzIiwidHlwZSI6IlVzZXIifV0sInJvbGVzIjpbInF1ZXJ5RXhlY3V0b3IiXSwiZXhwIjoxNjc3OTE5ODgwLCJpYXQiOjE2Nzc4MzM0ODB9.P2HRjGLQ3rRkHuJ49cu8KiASgNttFEIt7XDDdYxdGPg");
    },
    success: function (result, status, xhr) {
     
      console.log(result)
  
           
      } })