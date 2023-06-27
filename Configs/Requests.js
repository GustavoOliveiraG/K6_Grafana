import http from 'k6/http';
import { check, sleep } from 'k6';
import { urlBase } from './ConfigExport.js';
import { paramsHeaders } from './Headers.js';



// Função POST request.
export function postRequest(urlFinal, PayLoad){

    const urlCompleta = `${urlBase}${urlFinal}`;
    const res = http.post(urlCompleta, PayLoad, paramsHeaders);


    check(res, {
        'status code 201': (r) => r.status === 201
    });


    console.log("Url: " + urlCompleta);
    console.log("PayLoad: " +PayLoad);
    console.log("Body: " +res.body);
    console.log("StatusCode: " + res.status);
    
    sleep(1);
}



// Função GET request.
export function getRequest(urlFinal){

    const urlCompleta = `${urlBase}${urlFinal}`;
    const res = http.get(urlCompleta, paramsHeaders);

    check(res, {
        'status code 200': (r) => r.status === 200
    });


    console.log("Url: " + urlCompleta);
    console.log("Body: " +res.body);
    console.log("StatusCode: " + res.status);


    sleep(1);
}



// Função GET request passando os parametros.
export function getRequest2(urlFinal,paramsHeaders){

    const urlCompleta = `${urlBase}${urlFinal}`;
    const res = http.get(urlCompleta, paramsHeaders);

    check(res, {
        'status code 200': (r) => r.status === 200
    });


    console.log("Url: " + urlCompleta);
    console.log("Body: " +res.body);
    console.log("StatusCode: " + res.status);


    sleep(1);
}