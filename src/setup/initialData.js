import { v4 as uuidv4 } from "uuid";

export const crew = [
  {
    id: uuidv4(),
    name: 'Straw Hat Pirates',
    color: '#fabe01',
    image: 'https://static.wikia.nocookie.net/onepiece/images/b/bf/Straw_Hat_Pirates_Portrait.png'
  },
  {
    id: uuidv4(),
    name: 'Booney Pirates',
    color: '#ee86a9',
    image: 'https://static.wikia.nocookie.net/onepiece/images/0/0f/Bonney_Pirates_Portrait.png'
  },
  {
    id: uuidv4(),
    name: 'Drake Pirates',
    color: '#5d769e',
    image: 'https://static.wikia.nocookie.net/onepiece/images/e/ed/Drake_Pirates_Portrait.png'
  },
  {
    id: uuidv4(),
    name: 'Fire Tank Pirates',
    color: '#8a5b45',
    image: 'https://static.wikia.nocookie.net/onepiece/images/1/1d/Fire_Tank_Pirates_Portrait.png'
  },
  {
    id: uuidv4(),
    name: 'Heart Pirates',
    color: '#ffe101',
    image: 'https://static.wikia.nocookie.net/onepiece/images/7/73/Heart_Pirates_Portrait.png'
  },
  {
    id: uuidv4(),
    name: 'Kid Pirates',
    color: '#c73731',
    image: 'https://static.wikia.nocookie.net/onepiece/images/5/5b/Kid_Pirates_Portrait.png'
  }
];

export const pirates = [
  {
    name: 'Monkey D. Luffy',
    role: 'Captain',
    bounty: '3000000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/e/e6/Luffy_Wax.png',
    crewId: crew[0].id,
    id: uuidv4(),
  },
  {
    name: 'Nico Robin',
    role: 'Archaeologist',
    bounty: '930000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/9/90/Nico_Robin_Post_Timeskip_Portrait.png',
    crewId: crew[0].id,
    id: uuidv4(),
  },
  {
    name: 'Usopp',
    role: 'Sniper',
    bounty: '500000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/9/97/Usopp_Portrait.png',
    crewId: crew[0].id,
    id: uuidv4(),
  },
  {
    name: 'Roronoa Zoro',
    role: 'Swordsman',
    bounty: '1111000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/5/5d/Roronoa_Zoro_Portrait.png',
    crewId: crew[0].id,
    id: uuidv4(),
  },
  {
    name: 'Nami',
    role: 'Navigator',
    bounty: '366000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/2/26/Nami_Portrait.png',
    crewId: crew[0].id,
    id: uuidv4(),
  },
  {
    name: 'Sanji',
    role: 'Cook',
    bounty: '1032000000',
    image: 'https://img1.ak.crunchyroll.com/i/spire1/88a2d724e14f9082b3128529e7c222fa1581697785_large.png',
    crewId: crew[0].id,
    id: uuidv4(),
  },
  {
    name: 'Brook',
    role: 'Musician',
    bounty: '383000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/8/85/Brook_One_Piece_Gigant_Battle%21_Outfit.png',
    crewId: crew[0].id,
    id: uuidv4(),
  },
  {
    name: 'Jewelry Bonney',
    role: 'Captain',
    bounty: '320000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/7/7c/Jewelry_Bonney%27s_Manga_Color_Scheme_Pre_Timeskip.png',
    crewId: crew[1].id,
    id: uuidv4(),
  },
  {
    name: 'Diez Drake',
    role: 'Captain',
    bounty: '220000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/5/5c/X_Drake_Portrait.png/',
    crewId: crew[2].id,
    id: uuidv4(),
  },
  {
    name: 'Capone Bege',
    role: 'Captain',
    bounty: '350000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/2/2a/Capone_Bege_Portrait.png/',
    crewId: crew[3].id,
    id: uuidv4(),
  },
  {
    name: 'Trafalgar Law',
    role: 'Captain',
    bounty: '3000000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/3/31/Trafalgar_D._Water_Law_Portrait.png',
    crewId: crew[4].id,
    id: uuidv4(),
  },
  {
    name: 'Eustass Kid',
    role: 'Captain',
    bounty: '3000000000',
    image: 'https://static.wikia.nocookie.net/onepiece/images/a/a9/Eustass_Kid_Portrait.png',
    crewId: crew[5].id,
    id: uuidv4(),
  },

];