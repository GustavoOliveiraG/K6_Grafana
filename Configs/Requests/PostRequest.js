import http from 'k6/http';
import { check, sleep } from 'k6';
import { urlBase } from './ConfigExport.js';
import { paramsHeaders } from './Headers.js';



// Função POST request.
export function postRequest(urlFinal, PayLoad){

    const urlCompleta = `${urlBase}${urlFinal}`;
    const res = http.post(urlCompleta, PayLoad, paramsHeaders);


    check(res, {
        'status code 200': (r) => r.status === 200
    });


    console.log("Url: " + urlCompleta);
    console.log("PayLoad: " +PayLoad);
    console.log("Body: " +res.body);
    console.log("StatusCode: " + res.status);
    
    sleep(1);
}