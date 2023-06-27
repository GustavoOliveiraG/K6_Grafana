import { getRequest } from "../Configs/Requests.js";



// URL da chamada request.
const urlCompleta = `/public/crocodiles/`;


// Definição de TPS e TIME. 
export const options = {
    vus: 1,
    duration: '1s',
}


// Chamada GET.
export default () =>{
    getRequest(urlCompleta);
}