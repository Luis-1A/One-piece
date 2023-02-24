import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useCrewsContext } from "../../context/Crews";
import { usePiratesContext } from "../../context/Pirates";
import Dropdown from "../Dropdown";
import InputField from "../InputField";
import FormTemplate from "./FormTemplate";
import { useNavigate } from 'react-router-dom';

export default function PirateForm() {
    const { addPirate } = usePiratesContext();
    const { crewList } = useCrewsContext();

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [bounty, setBounty] = useState('');
    const [image, setImage] = useState('');
    const [crew, setCrew] = useState('');

    const navigate = useNavigate();

    const clearInputFields = () => {
        setName('');
        setRole('');
        setBounty('');
        setImage('');
        setCrew('');
    }

    const saveData = (e) => {
        e.preventDefault();       
        clearInputFields();
        addPirate({name, role, bounty, image, crewId: crew, id: uuidv4()})
        navigate('/');
    }

    return (
        <FormTemplate title='Pirate Information' onSave={saveData} >
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
                type="number"
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
        </FormTemplate>
    )
}