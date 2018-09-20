import axios from 'axios';

export function API (breed) {
    return new Promise((resolve,reject) => {
        axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error);
        });
    })
}