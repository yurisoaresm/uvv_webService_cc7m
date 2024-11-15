# Documentação do Projeto

## Descrição
Este projeto é um exemplo de código que demonstra a funcionalidade de uma API de carteira de criptomoedas. Ele foi desenvolvido com o objetivo de demonstrar como gerenciar e consultar saldos de criptomoedas. O projeto foi desenvolvido como parte de um trabalho envolvendo Web Services.

## Funcionalidades
- O projeto permite a criação de carteiras de criptomoedas.
- As carteiras são salvas em memória (array) e não são persistentes.
- O projeto permite a consulta de saldos de diferentes criptomoedas criadas pelo usuário.
- O projeto permite a transferência de criptomoedas entre carteiras (previamente criadas pelo usuário).

## Como Funciona
1. O projeto possui um arquivo principal chamado [main.ts](src/main.ts), que é responsável por iniciar o servidor e chamar as funções que gerenciam as carteiras e exibem os saldos.
2. Você pode usar um cliente HTTP (como o Postman) para fazer requisições à API de carteira de criptomoedas.

### Rotas
- A API possui as seguintes rotas:
  - `GET api/wallets`: Retorna a lista de carteiras de criptomoedas criadas pelo usuário.
  - `GET api/wallets/:id`: Retorna os dados da carteira de criptomoedas com o ID especificado.
  - `POST api/wallets`: Cria uma nova carteira de criptomoedas.
  - `POST api/wallets/transfer`: Transfere criptomoedas entre duas carteiras.
  - `PUT api/wallets/:id/`: Realiza um depósito ou saque de criptomoedas na carteira especificada.
  - `DELETE api/wallets/:id`: Deleta a carteira de criptomoedas com o ID especificado.

## Estrutura do Código
- O código do projeto está organizado da seguinte forma:
  - [walletController.ts](src/controllers/walletController.ts): Contém as funções que gerenciam as carteiras de criptomoedas.
  - [walletService.ts](src/services/walletService.ts): Contém as funções que realizam as operações de transferência, depósito e saque de criptomoedas. Simulam a interação com um banco de dados.
  - [wallet.ts](src/models/wallet.ts): Contém a definição da classe Wallet, que representa uma carteira de criptomoedas.
  - [walletRoutes.ts](src/routes/walletRoutes.ts): Contém as rotas da API de carteira de criptomoedas.
  - [main.ts](src/main.ts): Arquivo principal do projeto, que inicia o servidor e utiliza as rotas da API.
  - [tsconfig.json](tsconfig.json): Arquivo de configuração do TypeScript.
  - [package.json](package.json): Arquivo de configuração do projeto Node.js, que contém informações sobre as dependências e scripts de execução.
  - [node_modules/](node_modules/): Diretório que contém as dependências do projeto.
  - [eslint.json](.eslintrc.json): Arquivo de configuração do ESLint (formatação de código).
  - [prettier](.prettierrc): Arquivo de configuração do Prettier (formatação de código).
  - [README.md](README.md): Arquivo de documentação do projeto.

## Como Executar
Para executar este projeto, siga os passos abaixo:
1. Clone o repositório: `git clone https://github.com/yurisoaresm/uvv_webService_cc7m.git`
2. Navegue até o diretório do projeto: `cd uvv_webService_cc7m/3-crypto-wallet-api`
3. Instale as dependências: `npm install`
4. Execute o projeto: `npm start`

## Requisitos
- É necessário ter o Node.js instalado na máquina para executar este projeto. Para instalar o Node.js, acesse [nodejs.org](https://nodejs.org/).

