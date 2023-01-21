import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Button from './components/Button';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name:'Straw Hat Pirates', 
      primaryColor: '#57C271', 
      secondaryColor : '#D9F7E9' 
    },
    {  
      name:'Booney Pirates', 
      primaryColor: '#82CFFA', 
      secondaryColor : '#E8F8FF' 
    },
    {  
      name:'Drake Pirates', 
      primaryColor: '#A6D157', 
      secondaryColor : '#F0F8E2' 
    },
    {  
      name:'Fire Tank Pirates', 
      primaryColor: '#E06B69', 
      secondaryColor : '#FDE7E8' 
    },
    {  
      name:'Heart Pirates', 
      primaryColor: '#DB6EBF', 
      secondaryColor : '#FAE9F5' 
    },
    {  
      name:'Kid Pirates', 
      primaryColor: '#FFBA05', 
      secondaryColor : '#FFF5D9' 
    }
  ];

  const [members, setMembers] = useState([]);
  const [showPirateForm, setShowPirateForm] = useState(false);
  const [showCrewForm, setShowCrewForm] = useState(false);

  const onNewMemberAdded = (member) => {
    // console.log(member);
    // update the array with its original content, plus the new member's data at the end of the array
    setMembers([...members, member]);
  }

  // show/hide Registration forms
  const toggleForm = (type) => {
    if (type === 'pirate') {
      setShowPirateForm(!showPirateForm);
    }
    if (type === 'crew') {
      setShowCrewForm(!showCrewForm);
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
        <Button>+ New Pirate Crew</Button>
      </div>

      {/* {showPirateForm && <Form teams={teams.map(team => team.name)} onRegisteredMember={member => onNewMemberAdded(member)} />} */}

      <Form 
        teams={teams.map(team => team.name)} 
        onRegisteredMember={member => onNewMemberAdded(member)}
        active={showPirateForm} 
      />

      <div className="crew-gallery">
        {teams.map(team => (
          <Team 
            key={team.name} 
            name={team.name} 
            primaryColor={team.primaryColor} 
            secondaryColor={team.secondaryColor} 
            members={members.filter(member => member.crew === team.name)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
