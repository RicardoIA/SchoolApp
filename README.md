# School App - Projeto Integrador 5º Semestre (2º Entrega)
### Curso
Análise e Desenvolvimento de Sistemas
### Disciplina
Projeto Integrador

## Integrantes:
- Caio Marques Machado
- Otton Ferreira da Silva
- Paulo Augusto Lopes
- Ricardo Inácio de Amorim
- Rovilson Florencio Garcia
- Vanessa Ribeiro de Moura Lima

## Sobre o Projeto
  A aplicação foi desenvolvida utilizando as seguintes tecnologias:
- **MySql** (database): O banco de dados foi desenvolvido para SQL através do ORM Prisma no backend.
- **Node.js** (backend): Foi utilizado o framework Nest.js para desenvolvimento da api, e o ORM Prisma para mapeamento e acesso ao banco de dados.
- **React Native** (frontend): O aplicativo foi desenvolvido utilizando a biblioteca expo e o framework React Native Paper.

## Pré-requisitos
Para executar a aplicação, é necessário ter instalado as seguintes ferramentas:
### Computador
O computador será utilizado para execução da aplicação.
- **MySql Server**
- **MySql Database**
- **Node.js**: 16.15 (versão recomendada)
- **Expo CLI**: 6.3.2 (versão recomendada)
### Celular
O celular será utilizado para acesso do aplicativo.
- **Expo Go** (aplicativo para celular)

## Passo a Passo
1. Em um computador, acesse a pasta do projeto em um terminal (CMD).
2. Em seguida, acesse a pasta ``backend`` e execute o comando abaixo:
```
npm install
```
3. Após a instalação das dependências, execute o comando:
```
npx prisma generate
```
4. A api agora já pode ser executada utilizando o comando:
```
npm run start
```
5. Em outro terminal (CMD) acesse a pasta ``frontend`` e execute o comando abaixo:
```
npm install
```
6. Após a instalação das dependências, execute o comando
```
npx expo start --tunnel
```
7. Em um celular, acesso o aplicativo ``Expo Go``
2. Selecione a opção ``Scan QR Code`` e escaneie o QR Code gerado na terminal da pasta ``frontend``.

## Teste do Aplicativo
1. Pressione o botão ``Acessar`` na tela inicial.
2. Utilize o usuário ``Ricardo`` com a senha ``123``.
3. É possivel interagir com o conteudo do aplicativo utilizando o menu inferior ou rolando as páginas.
