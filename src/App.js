import './App.css';
import { api } from './api/api.js'
import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Button from './components/Button';
import Footer from './components/Footer';
import Form from './components/Form';
import Crew from './components/Crew';
import Memoradum from './components/Memorandum';

function App() {
  const [piratesList, setPiratesList] = useState([]);
  const [crewList, setCrewList] = useState([]);

  // mostra uma mensagem quando um formulário é enviado
  const [message, setMessage] = useState('');

  // decide qual formulário mostrar 
  const [showForm, setShowForm] = useState({
    pirate: false,
    crew: false
  });

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = () => {
    setPiratesList(api.getPirates());
    setCrewList(api.getCrew());
  }

  const addNewPirate = (pirate) => {
    // usando uma função de atualização para atualizar o estado e atualizar a API
    setPiratesList(piratesList => {
      const listUpdated = [...piratesList, pirate]
      api.update('pirates', listUpdated);
      return listUpdated;
    })    
    toggleForm('pirate');
    showMessage('Pirata adicionado ao banco de dados');
  }

  const addNewCrew = (crew) => {
    // usando o retorno da API para atualizar o estado
    const updatedList = api.addCrew(crew);
    setCrewList(updatedList);
    toggleForm('crew');
    showMessage('Tripulação adicionada ao banco de dados');
  }

  const removePirate = (pirate) => {
    const updatedList = api.deletePirate(pirate);
    setPiratesList(updatedList);
  }

  // rola a tela para a área dos botões (o formulário é ocultado após o envio)
  const scrollScreen = () => {
    setTimeout(() => {
      document.querySelector('.registration-buttons').scrollIntoView({ behavior: 'smooth' });      
    }, 300);
  }

  // mensagem a ser exibida após a adição de um pirata ou tripulação
  const showMessage = (message) => {
    scrollScreen();
    setTimeout(() => {
      setMessage(message);
    }, 500);
    setTimeout(() => {
      setMessage('');
    }, 4500);
  }

  // mostra/oculta formulários de registro
  const toggleForm = (type) => {
    scrollScreen();
    if (type === 'pirate') {
      setShowForm({
        'pirate': !showForm['pirate'],
        'crew': false
      });
    }
    if (type === 'crew') {
      setShowForm({
        'crew': !showForm.crew,
        'pirate': false
      });
    }
  }

  return (
    <div className="App">
      <Banner />

      <Memoradum />

      <div className="registration-buttons">
        <Button onClick={() => toggleForm('pirate')}>
          {showForm.pirate ? '-' : '+'} Novo Pirata
        </Button>
        <Button onClick={() => toggleForm('crew')}>
          {showForm.crew ? '-' : '+'} Nova Tripulação de Piratas
        </Button>
      </div>

      {message && <p className="message">{message}</p>}

      <Form
        type='pirate'
        crewList={crewList}
        onAdd={pirate => addNewPirate(pirate)}
        onCancel={toggleForm}
        active={showForm.pirate}
      />

      <Form
        type='crew'
        onAdd={crew => addNewCrew(crew)}
        onCancel={toggleForm}
        active={showForm.crew}
      />

      <div className="crew-gallery">
        {crewList.map(crew => (
          <Crew
            key={crew.id}
            crew={crew}
            members={piratesList.filter(pirate => pirate.crewId === crew.id)}
            onPirateRemove={pirate => removePirate(pirate)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
