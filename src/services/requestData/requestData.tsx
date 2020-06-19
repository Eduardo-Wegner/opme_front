function requestData(url: string) {

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // query: organization,
    }).then(response => {
        console.log(response);
        return (response.json());
    }).then(result => {
        console.log(result);
        return (result)
    }).catch(err => {
        alert('Erro de conexão.');
        console.error(err);
    });    

    
}

export default requestData;