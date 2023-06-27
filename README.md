## Projeto K6

- Linguagem - Javascript
- Orquestrador de testes - [K6](https://k6.io/) 
- Relatório de testes - [K6 Report](https://github.com/benc-uk/k6-reporter) 
- Integração Cloud  - [K6](https://k6.io/) 
- API Request https://test-api.k6.io/





## Arquitetura

**Premissas de uma boa arquitetura de testes:**

* Facilitar o desenvolvimento dos testes (reuso).

* Facilitar a manutenção dos testes (refatoração).

* Tornar o fluxo do teste o mais legível possível (fácil entendimento do que está sendo testado).



**Arquitetura do projeto**

- ***Configs  >>  ConfigExport.js***

Configuração de variáveis globais que serão exportadas para utilização em todo o projeto.

- ***Configs  >>  Headers.js***

Configuração do Header da *request* para chamada nos testes.

- ***Configs  >>  Requests.js***

Configuração dos Request  para chamada nos testes.

Obs. A pasta request seria uma nova opção de organização de forma separada, por tipo.

- ***Configs  >>  Utility.js***

Funções utilitárias para uso em geral no projeto.

- ***CSV  ou Json***

Exemplo de pastas para organização de arquivos externos. 

- ***Tests***

Pasta de organização e criação dos cenários de testes.



- ***Ambiente.json***

Configuração dos parâmetro de ambiente necessário para testes em vários ambientes.

Obs. criar um .json para cada ambiente e configurar também na  *ConfigExport.js* os parâmetros.

- ***ConfigAmbiente.js***

Definição de qual ambiente o teste ira ser executado.





## Execução dos testes

**Configurações**

- Instalação do K6 https://k6.io/open-source/
- Criação da conta no K6 https://app.k6.io/account/login/



**Comando de execução**

*Teste Local*

k6 runTests/GetCrocodilesCloud.js



*Teste em Cloud*

k6 cloud Tests/GetCrocodilesCloud.js

k6 run -o cloud  Tests/GetCrocodilesCloud.js





## Execução dos testes com Grafana

**Configurações**

*Comando Docker -->* docker-compose up -d influxdb grafana



obs. Para usar o grafana os scripts de testes tem que ficar em arquivos unicos dentro da pasta scripts, conforme exemplo *GetCrocodilesGrafana.js*



*Comando para executar os testes -->* docker-compose run k6 run /scripts/GetCrocodilesGrafana.js

*Visualização do grafana* - http://localhost:3000/d/k6/k6-load-testing-results?orgId=1&refresh=5s

*Usuario e senha padrao* - admin



Pastas *dashboards, scripts* e arquivos *.yml* são necessários para execução correta do grafana.