let dom={
    output:  document.querySelector('.output'),
    getDataBtn: document.querySelector('.getDataBtn'),
};

function render(data){
    dom.output.innerHTML = data;
};

const dataURL = './data/data.txt';

let fetchAPI = function(method, url){
    fetch(url)
        .then(function (response){
            return response.text();
        })
        .then(function (responseText){
            // do something with responseText
            nodes.output.innerHTML = responseText;
        });
};

let fetchDataByXHR = function(method, url){
    // create a XMLHttpRequest object
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
    new ActiveXObject("Microsoft.XMLHTTP");
    
    // initializes the request:
    xhr.open(method, url);
    // xhr.open(method, url, false);
    
    // EventHandler, that will be fired each time when the xhr state changes
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // finally do something with content:
            console.log(this.responseText);
            // dom.output.innerHTML = this.responseText;
            // render();
            render(this.responseText);
            //19:20:00
            // return this.responseText;
        };
    };
    
    // sends the request:
    xhr.send();
};

dom.getDataBtn.addEventListener('click', function(){
    //19:00:00
    // let data = fetchDataByXHR("GET", './data/data.txt');
    // render(data);
    //some other method:
    //let todoData = fetchDataByXHR("POST", './data/data.txt');
    data = fetchDataByXHR("GET", './data/data.txt');
});

//small example
// function fetch(){
//     return {
//         "id": 1
//     }
// };
// console.log(fetch().id);