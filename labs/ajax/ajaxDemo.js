let dom={
    output:  document.querySelector('.output'),
    getDataBtn: document.querySelector('.getDataBtn'),
};

function render(data){
    dom.output.innerHTML = data;
}
const dataURL = './data/data.txt';

//REQUEST to resource
//METHOD, URL

let fetchDataByXHR = function(){
    // create a XMLHttpRequest object
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
    new ActiveXObject("Microsoft.XMLHTTP");
    
    // initializes the request:
    xhr.open("GET", dataURL);
    
    // EventHandler, that will be fired each time when the xhr state changes
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // finally do something with content:
            console.log(this.responseText);
            dom.output.innerHTML = this.responseText;
        };
    };
    
    // sends the request:
    xhr.send();
};

dom.getDataBtn.addEventListener('click', function(){
    fetchDataByXHR();
});
