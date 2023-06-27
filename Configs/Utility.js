import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import http from 'k6/http';
import { password, user } from './ConfigExport.js';



export function lerJson(caminhoJSON){
    var jsonData = JSON.parse(open(caminhoJSON));
    jsonData = JSON.stringify(jsonData);
    return jsonData;
}


export function lerCSV(caminhoCSV){
    var csvData = new SharedArray('Ler dados', function(){
        return papaparse.parse(open(caminhoCSV), {header: true}).data;
    });
    return csvData;
}


export function gerarToken(){
    var tokenRes =  http.post('https://test-api.k6.io/auth/token/login/', 
    {
        username: user,
        password: password
    });

    console.log("StatusCode TOKEN: " + tokenRes.status);
    const token = tokenRes.json('access');
    console.log("TOKEN: " + token);
    return token;
}
