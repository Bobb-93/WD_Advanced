let fetchAPI = function(url){
    fetch(url)
        .then(response => {
                // console.dir(response);
                // console.log(response);
                // response.headers.forEach( el =>
                //     console.log(el)
                // );
                //log response headers
                // response.headers.forEach( (name, value) =>
                //         console.log(`${name}: ${value}`)
                // );

                //get body data
                // let body = response.text();
                // console.log(body);
                // body.then(data => console.log(data))
                return response.text();
            })
            .then(data => console.log(data))
        .catch(err => 
            console.log("Ups, something went wrong!!!")
        )
}

fetchAPI("./data/data.txt");
console.log("hello");