console.log("Ajax tutorial in one video");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)
function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'applictaion/json');
    // What to do on progress (optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }
    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);

    // }

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
        else {
            console.log("Some error occured")
        }
    }
    // send the request
    params = `{"name":"Raghu234134","salary":"589953","age":"243"}`;
    xhr.send(params);
    console.log(params);
}


// ------------------------------------------------------------------------------------------------------------------------------------
let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);


function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);


    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);

            let list = document.getElementById('list');
            str = "";
            for (key in obj) {
                str += `<li> ${obj[key].name}   </li>` + `<li> ${obj[key].email} </li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching Products!");

}






// -----------------------------------------------------------------------------------------------------------------------------



// let subBtn = document.getElementById('userpost');
// subBtn.addEventListener('submit', buttonsubmitHandler)

// function buttonsubmitHandler() {
//     console.log('You have clicked the fetchBtn');

//     // Instantiate an xhr object
//     const xhr = new XMLHttpRequest();

//     // Open the object
//     // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

//     // USE THIS FOR POST REQUEST
//     xhr.open('POST', 'img.jpg', true);

//     xhr.getResponseHeader('Content-type', 'multipart/form-data');



//     xhr.onload = function () {
//         if (this.status === 200) {

//             console.log(this.responseText)



//         }
//         else {
//             console.log("Some error occured")
//         }
//     }


//     // What to do on progress (optional)
//     xhr.onprogress = function () {
//         console.log('On progress');
//     }

//     xhr.send();
//     console.log("We are done fetching Products!");

// }