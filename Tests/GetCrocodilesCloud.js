import { getRequest } from "../Configs/Requests.js";




// URL da chamada request.
const urlCompleta = `/public/crocodiles/`;




// Definição de TPS e TIME. 
export const options = {
    vus: 1,
    duration: '1s',

    ext: {
        loadimpact: {
          projectID: 3645323,
          // Test runs with the same name groups test runs together
          name: "test-k6"
        }
      }

}




// Chamada GET.
export default () =>{
    getRequest(urlCompleta);
}




  // Login no K6.
  //> k6 login cloud -t xxxxxxxxxxxxxxx

  // Executando os testes em CLOUD.
  //> k6 cloud Tests/GetCrocodilesCloud.js

    // Executando os testes locais com report em  CLOUD.
  //> k6 run -o cloud  Tests/GetCrocodilesCloud.js