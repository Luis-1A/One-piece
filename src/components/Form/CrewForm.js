import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useCrewsContext } from "../../context/Crews";
import InputField from "../InputField";
import FormTemplate from "./FormTemplate";
import { useNavigate } from 'react-router-dom';

export default function CrewForm() {
    const { addCrew } = useCrewsContext();

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [color, setColor] = useState('#1C7ABF');

    const navigate = useNavigate();

    const clearInputFields = () => {
        setName('');
        setImage('');
        setColor('#1C7ABF');
    }

    const saveData = (e) => {
        e.preventDefault();
        clearInputFields();
        addCrew({ name, image, color, id: uuidv4() })
        navigate('/');
    }

    return (
        <FormTemplate title='Crew Information' onSave={saveData} >
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
        </FormTemplate>
    )
}