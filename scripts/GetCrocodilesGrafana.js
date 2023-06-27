import http from 'k6/http';
import { check, sleep } from 'k6';


// URL da chamada request.
const urlCompleta = `https://test-api.k6.io/public/crocodiles/`;


// Definição de TPS e TIME. 
export const options = {
    stages: [
        { duration: '10s', target: 10 }, 
        { duration: '60s', target: 10 },
        { duration: '10s', target: 1 } 
    ],
}


// Chamada GET.
export default () =>{
    const params = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    }

    const res = http.get("https://test-api.k6.io/public/crocodiles/", params);
    
    check(res, {
        'status code 200': (r) => r.status === 200
    });

    //console.log("Url: " + urlCompleta);
    //console.log("Body: " +res.body);
    //console.log("StatusCode: " + res.status);

    sleep(1);
}