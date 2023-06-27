import { getRequest } from "../Configs/Requests.js";



// URL da chamada request.
const urlCompleta = `/public/crocodiles/`;


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
    getRequest(urlCompleta);
}