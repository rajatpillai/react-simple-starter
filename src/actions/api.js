import axios from 'axios';

export function API (details) {
    let response;
    let error;
    return new Promise((resolve,reject) => {
        axios.get(`https://api.darksky.net/forecast/be383e7710d11f0763b5b9ce3b1fbbb3/22.7196,75.8577`)
        .then((response) => {
            console.log(response);
            resolve(response)
        })
        .catch((error) => {
            console.log(response);
            reject(error);
        });
    })
}