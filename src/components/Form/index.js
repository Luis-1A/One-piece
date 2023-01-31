import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import InputField from '../InputField';
import './Form.css';

const Form = ({ type, crewList=[], onAdd, onCancel, active }) => {
    
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [bounty, setBounty] = useState('');
    const [image, setImage] = useState('');
    const [crew, setCrew] = useState('');
    const [color, setColor] = useState('#000000');

    const clearInputFields = () => {
        setName('');
        setRole('');
        setBounty('');
        setImage('');
        setCrew('');
        setColor('#000000');
    }

    const onSave = (e) => {
        e.preventDefault();
        if (type === 'pirate') {
            onAdd({name, role, bounty, image, crewId: crew});
        }
        if (type === 'crew') {
            onAdd({name, image, color})
        }
        clearInputFields();
    }

    const closeForm = (e, type) => {
        e.preventDefault();
        clearInputFields();
        onCancel(type);
    }
    
    // TODO: eligible to become another component
    if (type === 'pirate') {
        return (
            <section className='form-container' style={{maxHeight: active ? '900px' : 0}}>
                <form onSubmit={onSave}>
                    <h2>Pirate Information</h2>
                    <InputField 
                        required={true} 
                        label="Name" 
                        placeholder="Type the scallywag's name" 
                        value={name}
                        onChange={value => setName(value)}  
                    />
                    <InputField 
                        required={true} 
                        label="Role" 
                        placeholder="Captain, navigator, sniper, medic, etc." 
                        value={role}
                        onChange={value => setRole(value)}  
                    />
                    <InputField  
                        label="Bounty" 
                        placeholder="Only numbers" 
                        value={bounty}
                        onChange={value => setBounty(value)}  
                    />
                    <InputField 
                        label="Image" 
                        placeholder="URL to a picture" 
                        value={image}
                        onChange={value => setImage(value)}  
                    />
                    <Dropdown 
                        required={true} 
                        label="Crew" 
                        itens={crewList} 
                        option={crew} 
                        onChange={value => setCrew(value)}
                    />
                    <div className="buttons-container">
                        <Button>Register</Button>
                        <Button onClick={(e) => closeForm(e, type)}>Cancel</Button>
                    </div>
                </form>
            </section>
        );
    }

    if (type === 'crew') {
        return (
            <section className='form-container' style={{maxHeight: active ? '900px' : 0}}>
                <form onSubmit={onSave}>
                    <h2>Pirate Crew Information</h2>
                    <InputField 
                        required={true} 
                        label="Name" 
                        placeholder="Type the crew's name" 
                        value={name}
                        onChange={value => setName(value)}  
                    />
                    <InputField 
                        label="Flag" 
                        placeholder="URL to a picture of the crew's flag" 
                        value={image}
                        onChange={value => setImage(value)}  
                    />
                    <InputField 
                        type="color"
                        label="Color"
                        value={color}
                        onChange={value => setColor(value)}
                    />
                    <div className="buttons-container">
                        <Button>Register</Button>
                        <Button onClick={(e) => closeForm(e, type)}>Cancel</Button>
                    </div>
                </form>
            </section>
        );
    }

}

export default Form;