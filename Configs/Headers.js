import { token } from "./ConfigExport.js";



  export const paramsHeaders = {
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json; charset=UTF-8',
        }
    }


    export function paramsHeadersToken(gerarToken){
        const params = {
            headers: {
                'Authorization': `Bearer ${gerarToken}`,
                'Content-Type': 'application/json; charset=UTF-8',
            }
        }
        return params;
    }