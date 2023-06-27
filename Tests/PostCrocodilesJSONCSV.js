import { postRequest } from "../Configs/Requests.js";
import { lerCSV } from "../Configs/Utility.js";


// URL da chamada.
const urlCompleta = `/user/register/`;



// Definição de TPS e TIME. 
export const options = {
    vus: 1,
    duration: '10s',
}


// Importanto arquivo.
var csvData = lerCSV('../CSV/Usuarios.csv');
var cont=0;



// Chamada POST.
export default () =>{
    // Importanto CSV com dados random.
    /*
    var userName = csvData[Math.floor(Math.random() * csvData.length)].NOME
    var userEmail = csvData[Math.floor(Math.random() * csvData.length)].EMAIL
    var userSenha = csvData[Math.floor(Math.random() * csvData.length)].SENHA
    */


    
    // Importanto CSV dados random de uma msm linha. 
    /* 
    var i = parseInt(Math.random() * csvData.length);
    var userName = csvData[i].NOME;
    var userEmail = csvData[i].EMAIL;
    var userSenha = csvData[i].SENHA;
    */


    // Importanto CSV em ordem.  
    var i = cont;
    console.log(i);
    var csvFinal = csvData.length;
    csvFinal = csvFinal-1;
    console.log(csvFinal);

    var userName = csvData[i].NOME;
    var userEmail = csvData[i].EMAIL;
    var userSenha = csvData[i].SENHA;



    // configuração payload.
    var payload = JSON.stringify({
        "username": userName,
        "first_name": userName,
        "last_name": userName,
        "email": userEmail,
        "password": userSenha
        });



    // Envio Request.
    postRequest(urlCompleta, payload);
    
    // Caso acabe o CSV, ele reinica a contagem para leitura em ordem.
    if (cont == csvFinal)
        cont = 0
    else 
        cont++;    
}