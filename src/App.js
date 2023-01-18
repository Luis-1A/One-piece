import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name:'Programação', 
      primaryColor: '#57C271', 
      secondaryColor : '#D9F7E9' 
    },
    {  
      name:'Front-End', 
      primaryColor: '#82CFFA', 
      secondaryColor : '#E8F8FF' 
    },
    {  
      name:'Data Science', 
      primaryColor: '#A6D157', 
      secondaryColor : '#F0F8E2' 
    },
    {  
      name:'Devops', 
      primaryColor: '#E06B69', 
      secondaryColor : '#FDE7E8' 
    },
    {  
      name:'UX e Design', 
      primaryColor: '#DB6EBF', 
      secondaryColor : '#FAE9F5' 
    },
    {  
      name:'Mobile', 
      primaryColor: '#FFBA05', 
      secondaryColor : '#FFF5D9' 
    },
    {  
      name:'Inovação e Gestão',
      primaryColor: '#FF8A29', 
      secondaryColor : '#FFEEDF' 
    }
  ];

  const [members, setMembers] = useState([]);

  const onNewMemberAdded = (member) => {
    // console.log(member);
    // update the array with its original content, plus the new member's data at the end of the array
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onRegisteredMember={member => onNewMemberAdded(member)} />
      {teams.map(team => (
        <Team 
          key={team.name} 
          name={team.name} 
          primaryColor={team.primaryColor} 
          secondaryColor={team.secondaryColor} 
          members={members.filter(member => member.team === team.name)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
