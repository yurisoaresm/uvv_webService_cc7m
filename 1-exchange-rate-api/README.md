# Documentação do Projeto

## Descrição
Este projeto é um exemplo de código que demonstra a funcionalidade de consumo de API externa Exchange Rate API. Ele foi desenvolvido com o objetivo de demonstrar como obter dados relevantes de uma API. O projeto foi desenvolvido como parte de um trabalho envolvendo Web Services.

## Funcionalidades
- O projeto consome a API Exchange Rate API para obter informações sobre taxas de câmbio de moedas.
- O projeto exibe as taxas de câmbio do dolar em relação ao real (BRL), euro (EUR) e iene (JPY).

## Como Funciona
1. O projeto faz uma requisição GET para a API Exchange Rate API.
2. A API retorna um JSON com as taxas de câmbio.
3. O projeto exibe as taxas de câmbio do dolar em relação ao real (BRL), euro (EUR) e iene (JPY).

## Estrutura do Código
- O código do projeto está organizado da seguinte forma:
  - [main.js](src/main.js): Arquivo principal do projeto, responsável por chamar a função que consome a API e exibir as taxas de câmbio.
  - [api.js](src/api.js): Arquivo que contém a função assíncrona que faz a requisição à API.
  - [package.json](package.json): Arquivo de configuração do projeto Node.js, que contém informações sobre as dependências e scripts de execução.
  - [node_modules/](node_modules/): Diretório que contém as dependências do projeto.
  - [README.md](README.md): Arquivo de documentação do projeto.

## Como Executar
Para executar este projeto, siga os passos abaixo:
1. Clone o repositório: `git clone https://github.com/yurisoaresm/uvv_webService_cc7m.git`
2. Navegue até o diretório do projeto: `cd uvv_webService_cc7m/1-exchange-rate-api`
3. Instale as dependências: `npm install`
4. Execute o projeto: `npm start`

> **Observação:** Para executar o projeto, é necessário ter uma chave de acesso à API Exchange Rate API. Para obter uma chave de acesso, acesse [exchangerate-api.com](https://www.exchangerate-api.com/). Crie um arquivo `.env` na raiz do projeto como cópia do arquivo `.env.example` e insira a chave de acesso à API no campo `API_KEY`.

## Requisitos
- É necessário ter o Node.js instalado na máquina para executar este projeto. Para instalar o Node.js, acesse [nodejs.org](https://nodejs.org/).
