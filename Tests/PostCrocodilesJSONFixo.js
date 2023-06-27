import { postRequest } from "../Configs/Requests.js";
import { lerJson } from "../Configs/Utility.js";


// URL da chamada.
const urlCompleta = `/user/register/`;



// Definição de TPS e TIME. 
export const options = {
    vus: 1,
    duration: '1s',
}



// Importanto arquivo.
var payload = lerJson('../Json/Usuarios2.json');



// Chamada POST
export default () =>{
    postRequest(urlCompleta, payload);
}