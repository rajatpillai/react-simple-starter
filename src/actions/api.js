import axios from 'axios';

export function API (breed) {
    let response;
    let error;
    return new Promise((resolve,reject) => {
        axios.get(`https://dog.ceo/api/breed/${breed}/images`)
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