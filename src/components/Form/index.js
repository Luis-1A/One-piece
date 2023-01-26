import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import TextInput from '../TextInput';
import './Form.css';

const Form = ({ type, crewList=[], onAddPirate, active }) => {
    
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [bounty, setBounty] = useState('');
    const [image, setImage] = useState('');
    const [crew, setCrew] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        onAddPirate({name, role, bounty, image, crew});
        setName('');
        setRole('');
        setBounty('');
        setImage('');
        setCrew('');
    }
    
    if (type === 'pirate') {
        return (
            <section className='form-container' style={{maxHeight: active ? '900px' : 0}}>
                <form onSubmit={onSave}>
                    <h2>Pirate Information</h2>
                    <TextInput 
                        required={true} 
                        label="Name" 
                        placeholder="Type the scallywag's name" 
                        text={name}
                        onChange={value => setName(value)}  
                    />
                    <TextInput 
                        required={true} 
                        label="Role" 
                        placeholder="Captain, navigator, sniper, medic, etc." 
                        text={role}
                        onChange={value => setRole(value)}  
                    />
                    <TextInput  
                        label="Bounty" 
                        placeholder="Only numbers" 
                        text={bounty}
                        onChange={value => setBounty(value)}  
                    />
                    <TextInput 
                        label="Image" 
                        placeholder="URL to a picture" 
                        text={image}
                        onChange={value => setImage(value)}  
                    />
                    <Dropdown 
                        required={true} 
                        label="Crew" 
                        itens={crewList} 
                        option={crew} 
                        onChange={value => setCrew(value)}
                    />
                    <Button>Register</Button>
                </form>
            </section>
        );
    }

    if (type === 'crew') {
        return (
            <section className='form-container' style={{maxHeight: active ? '900px' : 0}}>
                <form onSubmit={onSave}>
                    <h2>Pirate Crew Information</h2>
                    <TextInput 
                        required={true} 
                        label="Name" 
                        placeholder="Type the crew's name" 
                        text={name}
                        onChange={value => setName(value)}  
                    />
                    <TextInput 
                        label="Flag" 
                        placeholder="URL to a picture of the crew's flag" 
                        text={image}
                        onChange={value => setImage(value)}  
                    />
                    <Button>Register</Button>
                </form>
            </section>
        );
    }

}

export default Form;