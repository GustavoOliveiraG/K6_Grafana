import { postRequest } from "../Configs/Requests.js";
import { lerJson } from "../Configs/Utility.js";


// URL da chamada.
const urlCompleta = `/user/register/`;



// Definição de TPS e TIME. 
export const options = {
    vus: 1,
    duration: '10s',
}



// Importanto arquivo.






// Chamada POST.
export default () =>{

    // configuração payload.
    var nomeRandom = (Math.random() * 20);
    var payload = JSON.stringify({
        "username": "Nome"+nomeRandom,
        "first_name": "Nome"+nomeRandom,
        "last_name": "Nome"+nomeRandom,
        "email": "Nome"+nomeRandom+"@Gmail.com",
        "password": "123456"
      });

    // Envio Request.
    postRequest(urlCompleta, payload);
}