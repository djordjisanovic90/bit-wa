fetch('http://127.0.0.1:3003')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
       

    })