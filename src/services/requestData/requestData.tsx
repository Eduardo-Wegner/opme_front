function requestData(url: string) {
    return new Promise((resolve, reject) => {
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
            resolve (result)
        }).catch(err => {
            alert('Erro de conexão.');
            console.error(err);
            reject(err)
        });    
    })
    
}

export default requestData;