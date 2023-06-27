import { getRequest } from "../Configs/Requests.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";



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



export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }
