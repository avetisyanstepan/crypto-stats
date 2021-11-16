import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/',
    timeout: 10000,
    headers: {
        'accept': 'application/json'
    }
   
  });


export const API = {
    get: (url = '', params = {}, additionalHeaders = {}) => {
        return instance.get(url, { 
            ...params, 
            headers: {
                ...additionalHeaders
            }
        });
    },
  
};


// const instance2 = axios.create({
//     baseURL: 'https://cryptopanic.com/api/v1/posts/?auth_token=a9a228a9cfb23c68fb045456e4619f991e6c3a6e&public=true',
//     timeout: 10000,
//     headers: {
//         'auth_token': 'a9a228a9cfb23c68fb045456e4619f991e6c3a6e',
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//         'Content-Type': 'application/json'
//         }
   
//   });


// export const API_NEWS = {
//     get: (url = '', params = {}, additionalHeaders = {}) => {
//         return instance2.get(url, { 
//             ...params, 
//             headers: {
//                 ...additionalHeaders
//             }
//         });
//     },
  
// };


