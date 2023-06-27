import { ambiente } from "../ConfigAmbiente.js";


var jsonConfig;
switch (ambiente) {
  case 'UAT':
    jsonConfig = JSON.parse(open('../AmbienteUAT.json'))
    break;
  case 'LOAD':
    jsonConfig = JSON.parse(open('../AmbienteLOAD.json'));
    break;
    case 'PRD':
        jsonConfig = JSON.parse(open('../AmbientePRD.json'));
        break;
  default:
    console.log('Nenhum ambiente definido');
}


export const urlBase = jsonConfig.urlBase;
export const token = jsonConfig.token;
export const user = jsonConfig.user;
export const password = jsonConfig.password;