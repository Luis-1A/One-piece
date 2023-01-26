import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Button from './components/Button';
import Footer from './components/Footer';
import Form from './components/Form';
import Crew from './components/Crew';
import { crew, pirates } from './setup/initialData.js'

function App() {
  const [message, setMessage] = useState(''); // show a message when a form is submitted
  const [piratesList, setPiratesList] = useState(pirates);
  const [crewList, setCrewList] = useState(crew);
  const [showForm, setShowForm] = useState({
    pirate: false,
    crew: false
  });

  const addNewPirate = (pirate) => {
    setPiratesList([...piratesList, pirate]);
    toggleForm('pirate');
    showMessage('Pirate added to the database');
  }

  const addNewCrew = (crew) => {
    setCrewList([...crewList, crew]);
    toggleForm('crew');
    showMessage('Crew added to the database');
  }

  const showMessage = (message) => {
    // scroll the screen to the buttons area
    document.querySelector('.registration-buttons').scrollIntoView({behavior:'smooth'});
    setTimeout(() => {
      setMessage(message);
    }, 500);
    setTimeout(() => {
      setMessage('');
    }, 4500);
  }

  // show/hide Registration forms
  const toggleForm = (type) => {
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

      <main className='memorandum'>
        <h1>The Worst Generation - Organization Charts</h1>
        <strong>Attention all Officers and Infantry members stationed at the New World!</strong>
        <p>The so-called "Worst Generation" is sailing our waters and it's imperative that we capture them and their crew.</p>
        <p>Below you'll find the organizational chart of known pirate crews. If you find any of these rascals, do not engage in battle and report immediately to your Captain. I repeat: <strong>do not engage in battle!</strong> These are extremely dangerous pirates with bounties of over <img src='/images/belly.png' alt='belly currency' className='belly' />100.000.000.</p>
        <p>If necessary, use the correspondent buttons to register a new pirate or pirate crew.</p>
        <p className='signature'>— Fleet Admiral Sakazuki</p>
      </main>

      <div className="registration-buttons">
        <Button onClick={() => toggleForm('pirate')}>+ New Pirate</Button>
        <Button onClick={() => toggleForm('crew')}>+ New Pirate Crew</Button>
      </div>

      {message && <p className="message">{message}</p>}

      <Form 
        type='pirate'
        crewList={crewList.map(crew => crew.name)} 
        onAdd={pirate => addNewPirate(pirate)}
        active={showForm.pirate}
      />

      <Form 
        type='crew'        
        onAdd={crew => addNewCrew(crew)}
        active={showForm.crew}
      />

      <div className="crew-gallery">
        {crewList.map(crew => (
          <Crew 
            key={crew.name} 
            name={crew.name} 
            primaryColor={crew.primaryColor} 
            secondaryColor={crew.secondaryColor} 
            members={piratesList.filter(pirate => pirate.crew === crew.name)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
