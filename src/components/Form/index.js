import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    const [color, setColor] = useState('#1C7ABF');

    const clearInputFields = () => {
        setName('');
        setRole('');
        setBounty('');
        setImage('');
        setCrew('');
        setColor('#1C7ABF');
    }

    const onSave = (e) => {
        e.preventDefault();
        if (type === 'pirate') {
            onAdd({name, role, bounty, image, crewId: crew, id: uuidv4()});
        }
        if (type === 'crew') {
            onAdd({name, image, color, id: uuidv4()})
        }
        clearInputFields();
    }

    const closeForm = (e, type) => {
        e.preventDefault();
        clearInputFields();
        onCancel(type);
    }
    
    if (type === 'pirate') {
        return (
            <section className='form-container' style={{maxHeight: active ? '900px' : 0}}>
                <form onSubmit={onSave}>
                    <h2>Informações do Pirata</h2>
                    <InputField 
                        required={true} 
                        label="Nome" 
                        placeholder="Digite o nome do pirata" 
                        value={name}
                        onChange={value => setName(value)}  
                    />
                    <InputField 
                        required={true} 
                        label="Função" 
                        placeholder="Capitão, navegador, atirador, médico, etc." 
                        value={role}
                        onChange={value => setRole(value)}  
                    />
                    <InputField  
                        type="number"
                        label="Recompensa" 
                        placeholder="Apenas números" 
                        value={bounty}
                        onChange={value => setBounty(value)}  
                    />
                    <InputField 
                        label="Imagem" 
                        placeholder="URL para uma imagem" 
                        value={image}
                        onChange={value => setImage(value)}  
                    />
                    <Dropdown 
                        required={true} 
                        label="Tripulação" 
                        items={crewList} 
                        option={crew} 
                        onChange={value => setCrew(value)}
                    />
                    <div className="buttons-container">
                        <Button>Registrar</Button>
                        <Button onClick={(e) => closeForm(e, type)}>Cancelar</Button>
                    </div>
                </form>
            </section>
        );
    }

    if (type === 'crew') {
        return (
            <section className='form-container' style={{maxHeight: active ? '900px' : 0}}>
                <form onSubmit={onSave}>
                    <h2>Informações da Tripulação de Piratas</h2>
                    <InputField 
                        required={true} 
                        label="Nome" 
                        placeholder="Digite o nome da tripulação" 
                        value={name}
                        onChange={value => setName(value)}  
                    />
                    <InputField 
                        label="Bandeira" 
                        placeholder="URL para uma imagem da bandeira da tripulação" 
                        value={image}
                        onChange={value => setImage(value)}  
                    />
                    <InputField 
                        type="color"
                        label="Cor"
                        value={color}
                        onChange={value => setColor(value)}
                    />
                    <div className="buttons-container">
                        <Button>Registrar</Button>
                        <Button onClick={(e) => closeForm(e, type)}>Cancelar</Button>
                    </div>
                </form>
            </section>
        );
    }

}

export default Form;
