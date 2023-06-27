import { paramsHeadersToken } from "../Configs/Headers.js";
import { getRequest2 } from "../Configs/Requests.js";
import { gerarToken } from "../Configs/Utility.js";



// URL da chamada request.
const urlCompleta = `/my/crocodiles`;


// Definição de TPS e TIME. 
export const options = {
    vus: 1,
    duration: '1s',
}


// Gerando Token.
export function setup(){
   const chave = gerarToken();
   return chave;
}



// Chamada GET.
export default (chave) =>{
    console.log(chave);
    const parametros = paramsHeadersToken(chave)
    getRequest2(urlCompleta,parametros);
}