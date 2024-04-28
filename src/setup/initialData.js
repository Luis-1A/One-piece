import { v4 as uuidv4 } from "uuid";

export const tripulacoes = [
  {
    id: uuidv4(),
    nome: 'Piratas do Chapéu de Palha',
    cor: '#fabe01',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/b/bf/Straw_Hat_Pirates_Portrait.png'
  },
  {
    id: uuidv4(),
    nome: 'Piratas de Booney',
    cor: '#ee86a9',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/0/0f/Bonney_Pirates_Portrait.png'
  },
  {
    id: uuidv4(),
    nome: 'Piratas de Drake',
    cor: '#5d769e',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/e/ed/Drake_Pirates_Portrait.png'
  },
  {
    id: uuidv4(),
    nome: 'Piratas do Tanque de Fogo',
    cor: '#8a5b45',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/1/1d/Fire_Tank_Pirates_Portrait.png'
  },
  {
    id: uuidv4(),
    nome: 'Piratas do Coração',
    cor: '#ffe101',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/7/73/Heart_Pirates_Portrait.png'
  },
  {
    id: uuidv4(),
    nome: 'Piratas do Kid',
    cor: '#c73731',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/5/5b/Kid_Pirates_Portrait.png'
  }
];

export const piratas = [
  {
    nome: 'Monkey D. Luffy',
    papel: 'Capitão',
    recompensa: '3000000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/e/e6/Luffy_Wax.png',
    idTripulacao: tripulacoes[0].id,
    id: uuidv4(),
  },
  {
    nome: 'Nico Robin',
    papel: 'Arqueóloga',
    recompensa: '930000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/9/90/Nico_Robin_Post_Timeskip_Portrait.png',
    idTripulacao: tripulacoes[0].id,
    id: uuidv4(),
  },
  {
    nome: 'Usopp',
    papel: 'Franco-atirador',
    recompensa: '500000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/9/97/Usopp_Portrait.png',
    idTripulacao: tripulacoes[0].id,
    id: uuidv4(),
  },
  {
    nome: 'Roronoa Zoro',
    papel: 'Espadachim',
    recompensa: '1111000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/5/5d/Roronoa_Zoro_Portrait.png',
    idTripulacao: tripulacoes[0].id,
    id: uuidv4(),
  },
  {
    nome: 'Nami',
    papel: 'Navegadora',
    recompensa: '366000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/2/26/Nami_Portrait.png',
    idTripulacao: tripulacoes[0].id,
    id: uuidv4(),
  },
  {
    nome: 'Sanji',
    papel: 'Cozinheiro',
    recompensa: '1032000000',
    imagem: 'https://img1.ak.crunchyroll.com/i/spire1/88a2d724e14f9082b3128529e7c222fa1581697785_large.png',
    idTripulacao: tripulacoes[0].id,
    id: uuidv4(),
  },
  {
    nome: 'Brook',
    papel: 'Músico',
    recompensa: '383000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/8/85/Brook_One_Piece_Gigant_Battle%21_Outfit.png',
    idTripulacao: tripulacoes[0].id,
    id: uuidv4(),
  },
  {
    nome: 'Jewelry Bonney',
    papel: 'Capitã',
    recompensa: '320000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/7/7c/Jewelry_Bonney%27s_Manga_Color_Scheme_Pre_Timeskip.png',
    idTripulacao: tripulacoes[1].id,
    id: uuidv4(),
  },
  {
    nome: 'Diez Drake',
    papel: 'Capitão',
    recompensa: '220000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/5/5c/X_Drake_Portrait.png/',
    idTripulacao: tripulacoes[2].id,
    id: uuidv4(),
  },
  {
    nome: 'Capone Bege',
    papel: 'Capitão',
    recompensa: '350000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/2/2a/Capone_Bege_Portrait.png/',
    idTripulacao: tripulacoes[3].id,
    id: uuidv4(),
  },
  {
    nome: 'Trafalgar Law',
    papel: 'Capitão',
    recompensa: '3000000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/3/31/Trafalgar_D._Water_Law_Portrait.png',
    idTripulacao: tripulacoes[4].id,
    id: uuidv4(),
  },
  {
    nome: 'Eustass Kid',
    papel: 'Capitão',
    recompensa: '3000000000',
    imagem: 'https://static.wikia.nocookie.net/onepiece/images/a/a9/Eustass_Kid_Portrait.png',
    idTripulacao: tripulacoes[5].id,
    id: uuidv4(),
  },

];
