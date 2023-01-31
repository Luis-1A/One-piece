import { v4 as uuidv4 } from "uuid";

export const crew = [
    {
      id: uuidv4(),
      name:'Straw Hat Pirates', 
      color: '#D9F7E9',
      image: 'https://static.wikia.nocookie.net/onepiece/images/b/bf/Straw_Hat_Pirates_Portrait.png'
    },
    {  
      id: uuidv4(),
      name:'Booney Pirates', 
      color: '#E8F8FF',
      image: 'https://static.wikia.nocookie.net/onepiece/images/0/0f/Bonney_Pirates_Portrait.png'
    },
    {  
      id: uuidv4(),
      name:'Drake Pirates', 
      color: '#F0F8E2',
      image: 'https://static.wikia.nocookie.net/onepiece/images/e/ed/Drake_Pirates_Portrait.png'
    },
    {  
      id: uuidv4(),
      name:'Fire Tank Pirates', 
      color: '#FDE7E8',
      image: 'https://static.wikia.nocookie.net/onepiece/images/1/1d/Fire_Tank_Pirates_Portrait.png'
    },
    {  
      id: uuidv4(),
      name:'Heart Pirates', 
      color: '#FAE9F5',
      image: 'https://static.wikia.nocookie.net/onepiece/images/7/73/Heart_Pirates_Portrait.png'
    },
    {  
      id: uuidv4(),
      name:'Kid Pirates', 
      color: '#FFF5D9',
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
        image: 'https://static.wikia.nocookie.net/onepiece/images/5/58/Law%27s_Finger_Tattoos.png',
        crewId: crew[4].id,
        id: uuidv4(),
    }, 
    {
        name: 'Eustass Kid',
        role: 'Captain',
        bounty: '3000000000',
        image: 'https://static.wikia.nocookie.net/onepiece/images/a/ad/Eustass_Kid_Pre_Timeskip_Manga_Color_Scheme.png',
        crewId: crew[5].id,
        id: uuidv4(),
    }, 

];