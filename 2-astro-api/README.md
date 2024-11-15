## Descrição
Este projeto é um exemplo de código que demonstra a funcionalidade de uma API de consulta de signos. Ele foi desenvolvido com o objetivo de fornecer informações sobre o signo do usuário e, para usuários com plano premium, um número e animal da sorte com uma mensagem especial. O projeto foi desenvolvido como parte de um trabalho envolvendo Web Services.

## Funcionalidades
- O projeto permite a consulta da mensagem associada ao signo do usuário a partir do seu "nickname".
- As consultas são realizadas em memória (array) e não são persistentes.
- O projeto permite a consulta de mensagens diárias para cada signo.
- É possível cadastrar vários usuários com "nicknames" diferentes, cada um com seu signo próprio.
- Usuários com plano premium podem receber um número e animal da sorte junto com a mensagem do signo.
- Usuário com plano básico recebem apenas uma mensagem do signo.

## Como Funciona
1. O projeto possui um arquivo principal chamado [main.ts](src/main.ts), que é responsável por iniciar o servidor e chamar as funções que gerenciam as consultas de signos e exibem as mensagens.
2. Você pode usar um cliente HTTP (como o Postman) para fazer requisições à API de consulta de signos.

### Rotas
- A API possui as seguintes rotas:
  - `GET api/users`: Retorna a lista de usuários cadastrados.
  - `GET api/users/:nickname`: Retorna as informações do usuário (plano + signo) com o nickname informado.
  - `GET api/horoscope/:nickname`: Retorna a mensagem do signo do usuário e, se for premium, um número e o animal da sorte.
  - `POST api/users`: Cadastra um novo usuário com o nickname, signo e plano informados.

## Estrutura do Código
- O código do projeto está organizado da seguinte forma:
  - [horoscopeData.ts](src/utils/horoscopeData.ts): Contém os dados relacionados às mensagens diárias de cada signo.
  - [userController.ts](src/controllers/userController.ts): Contém as funções que gerenciam as consultas do signo e usuário.
  - [astrologyService.ts](src/services/astrologyService.ts): Contém as funções que realizam as operações de consulta e geração de números da sorte. Simulam a interação com um banco de dados.
  - [usersService.ts](src/services/usersService.ts): Contém as funções que realizam as operações de cadastro e consulta de usuários. Simulam a interação com um banco de dados.
  - [user.ts](src/models/user.ts): Contém a definição da classe User, que representa um usuário.
  - [userRoutes.ts](src/routes/userRoutes.ts): Contém as rotas da API de consulta de signo e usuários.
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
2. Navegue até o diretório do projeto: `cd uvv_webService_cc7m/3-astro-api`
3. Instale as dependências: `npm install`
4. Execute o projeto: `npm start`

## Requisitos
- É necessário ter o Node.js instalado na máquina para executar este projeto. Para instalar o Node.js, acesse [nodejs.org](https://nodejs.org/).
