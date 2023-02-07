# One Piece | Worst Generation Pirates Chart

[Click here to read the English version of this Readme](#credits)

Adicione, remova e veja um organograma dos Piratas da Pior Geração, que navegam pelas águas do Novo Mundo em busca do One Piece.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Organograma dos Piratas de One Piece**
| :label: Tecnologias | React
| :rocket: URL         | https://one-piece-worst-gen-chart.vercel.app
| :fire: Curso     | https://www.alura.com.br/curso-online-react-desenvolvendo-javascript

![](https://user-images.githubusercontent.com/19349339/217247907-5a669d25-068b-4337-afa3-227032c0393f.png#vitrinedev)

## Créditos

Este projeto foi baseado no [Organo](https://github.com/zingarelli/organo), que é outro projeto que desenvolvi nos cursos introdutórios de React da [Alura](https://www.alura.com.br).

Eu criei o banner utilizando a imagem deste site: https://www.pngegg.com/en/png-zyxbs. Editei a mesma imagem para criar o favicon, que eu gerei no site [favicon.io](https://favicon.io/favicon-converter/).

A imagem para o Belly (a moeda do mundo de One Piece) foi copiada da [Wiki de One Piece](https://static.wikia.nocookie.net/onepiece/images/d/de/Beli.png/revision/latest?cb=20141206091723). Também utilizei a Wiki para popular as imagens dos piratas no arquivo `initialData.js` (neste caso, copiei a URL para as imagens). Somente a imagem para o Sanji que está diferente e utiliza uma URL da [Crunchyroll](https://img1.ak.crunchyroll.com/i/spire1/88a2d724e14f9082b3128529e7c222fa1581697785_large.png), por que eu achei ela hilária 😂

## Detalhes do projeto

Você pode [ver o projeto online clicando aqui](https://one-piece-worst-gen-chart.vercel.app).

Este é um projeto desenvolvido em React para visualizar a tripulação dos "Piratas da Pior Geração". Cada tripulação é separada em seções com cores distintas, com o nome da tripulação, sua bandeira, e uma galeria de cards de seus membros. O card possui uma imagem do pirata, seu nome, sua função na tripulação e valor de recompensa se capturado. Cada card também possui um botão para que seja removido. 

### Gif com visão geral da aplicação

![Gif com visão geral da aplicação](https://user-images.githubusercontent.com/19349339/217274303-7f3c4048-3b12-4034-8ef5-586955690e6f.gif)

Há também dois botões, que abrem formulários diferentes para se adicionar um novo pirata ou uma nova tripulação pirata. Adicionei uma animação para que os formulários apareçam ou sejam escondidos no evento de `onClick` dos botões. Os formulários possuem algumas validações nativas do navegador e, após a submissão, uma mensagem de sucesso é mostrada por alguns segundos. 

### Gif adicionando nova tripulação

![Gif adicionando nova tripulação](https://user-images.githubusercontent.com/19349339/217274412-88e0311d-febe-4baf-a065-dd16fca8c800.gif)

### Gif adicionando novo pirata

![Gif adicionando novo pirata](https://user-images.githubusercontent.com/19349339/217274422-83c90aac-a04a-4fcc-ba87-55afe1264c2a.gif)

A aplicação já vem com alguns dados iniciais para popular as tripulações. Estes dados se encontram no arquivo [initialData.js](https://github.com/zingarelli/one-piece-worst-gen-chart/blob/main/src/setup/initialData.js). Novos dados e suas atualizações são salvos localmente no navegador no "Local Storage". 

Criei um arquivo [api.js](https://github.com/zingarelli/one-piece-worst-gen-chart/blob/main/src/api/api.js) para simular o back-end do projeto. Ele é o responsável por importar os dados iniciais e depois fazer as tarefas de CRUD no "Local Storage". Não incluí nesta primeira versão do projeto a opção de editar os dados de pirata e tripulação. 

A aplicação é responsiva, com um layout personalizado para telas menores (até 425px de largura).

### Gif da aplicação mobile

![Gif da aplicação mobile](https://user-images.githubusercontent.com/19349339/217262557-f4fb3d90-ae2e-4967-8a15-d74d669ee361.gif)

## Instalação

O projeto foi criado com o Create React App, utilizando Node.js (versão v16.15.1) e npm (versão 8.11.0). É necessário possuir ambos instalados em sua máquina para rodar a aplicação.

Após clonar/baixar o projeto, abra um terminal, navegue até a pasta do projeto e rode o seguinte comando para instalar todas as dependências necessárias:

    npm install

Após isso, você pode rodar a aplicação em modo de desenvolvimento com o seguinte comando:

    npm start
A aplicação irá rodar no endereço http://localhost:3000.

---


## Credits

This project is based on [Organo](https://github.com/zingarelli/organo), another of my React Projects, developed in the React Courses I took at [Alura](https://www.alura.com.br).

I created the banner using an image from this website: https://www.pngegg.com/en/png-zyxbs. I edited the same image to create the favicon, which was generated in the website [favicon.io](https://favicon.io/favicon-converter/).

"Belly" currency was copied from the [One Piece Wiki](https://static.wikia.nocookie.net/onepiece/images/d/de/Beli.png/revision/latest?cb=20141206091723). I've also used the Wiki to populate images for the pirates included in the file `initialData.js` (on this case, I've just copied the URL to the image). Only Sanji's image is different - it's from [Crunchyroll](https://img1.ak.crunchyroll.com/i/spire1/88a2d724e14f9082b3128529e7c222fa1581697785_large.png), because I thought it was too hilarious to not be included 😂

## Project Details

You can [view this application online here](https://one-piece-worst-gen-chart.vercel.app).

This is a project developed in React to view a chart with the "Worst Generation" Pirate Crews. Each crew has its own section with distinct colors, with the crew's name, flag and a gallery of cards showing its members. The card has an image of the pirate, his/her name, role in the crew and bounty. Each card has also a button to remove it.

### Gif with an overviem of the app

![Gif with an overviem of the app](https://user-images.githubusercontent.com/19349339/217274303-7f3c4048-3b12-4034-8ef5-586955690e6f.gif)

There are also two buttons, which open different forms to add a new pirate or a new pirate crew. I've included some animation in order to show/hide the forms in the `onClick` event of the buttons. Inputs on each form have native browser validation and, after submitted, a success message is show for a few seconds.

### Gif adding a new crew

![Gif adding a new crew](https://user-images.githubusercontent.com/19349339/217274412-88e0311d-febe-4baf-a065-dd16fca8c800.gif)

### Gif adding a new pirate

![Gif adding a new pirate](https://user-images.githubusercontent.com/19349339/217274422-83c90aac-a04a-4fcc-ba87-55afe1264c2a.gif)

The app has an initial data to populate some crews. This data can be found in the [initialData.js](https://github.com/zingarelli/one-piece-worst-gen-chart/blob/main/src/setup/initialData.js) file. New data and updates are saved locally in the browser's Local Storage. 

I created an [api.js](https://github.com/zingarelli/one-piece-worst-gen-chart/blob/main/src/api/api.js) file to simulate a back-end to the project. This file is responsible to import initial data and perform the CRUD tasks in the Local Storage. I've not included the option to edit data in this first version of the project.

The app is responsive, having a layout for smaller screens (up to 425px width).

### Gif of the app running on mobile

![Gif of the app running on mobile](https://user-images.githubusercontent.com/19349339/217262557-f4fb3d90-ae2e-4967-8a15-d74d669ee361.gif)

## Instalation

This project was bootstrapped with Create React App, using Node.js (version v16.15.1) and npm (version 8.11.0). You need Node.js and npm installed in order to run this project.

After cloning or downloading this project, open a terminal, navigate to the project's folder and run the following command in order to install all necessary dependencies:

    npm install

After that, you can run the app in the development mode with the following command:

    npm start

The app will run at http://localhost:3000.

