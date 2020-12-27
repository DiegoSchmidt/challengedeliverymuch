# Delivery Much Tech Challenge

Autor: Diego Henrique Schmidt

Versão: 1.0

Data: 27/12/2020


### Pré-requisitos
 - Ter instalado o Node e Docker
 - Ter o npm instalado 
 - É preciso criar uma chave de API no [Giphy](https://developers.giphy.com/docs/sdk)
 - Criar um arquivo .env na pasta raiz do projeto e realizar as configurações das propriedades. Existe um arquivo de exemplo [.env.example](https://github.com/DiegoSchmidt/challengedeliverymuch/blob/master/.env.example) que pode ser visualizado.


### Execução do projeto
Para a execução do projeto pode ser de duas formas:
1. Via NPM diretamente

    Para execução utilizando este método é necessário rodar os comandos:
     ```
     npm install
     npm start
     ```
2. Via docker/bash

    Neste método possui um script que realizar a execução do container localmente para ambientes Unix:
      ```
      bash RunningAPP.sh
      ```
    Caso for ambiente Windows: 
      ```
      docker build -t challangedeliverymuch .
      docker run -p PORTAESCOLHIDA:PORTAESCOLHIDA --name challangedeliverymuch -d challangedeliverymuch
      ```

### Execução de testes unitários
Para execução dos testes unitários é preciso acessar o a raiz do projeto e rodar os seguintes comandos: 
  ```
  npm install
  npm run test
  ```