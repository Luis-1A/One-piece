import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import TextInput from '../TextInput';
import './Form.css';

const Form = ({ teams, onRegisteredMember, active }) => {
    
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        onRegisteredMember({name, role, image, team});
        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }
    
    return (
        <section className='form-container' style={{maxHeight: active ? '900px' : 0}}>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextInput 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    text={name}
                    onChange={ value => setName(value)}  
                />
                <TextInput 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    text={role}
                    onChange={ value => setRole(value)}  
                />
                <TextInput 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    text={image}
                    onChange={ value => setImage(value)}  
                />
                <Dropdown 
                    required={true} 
                    label="Time" 
                    itens={teams} 
                    option={team} 
                    onChange={ value => setTeam(value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    );
}

export default Form;