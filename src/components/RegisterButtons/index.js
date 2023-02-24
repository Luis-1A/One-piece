import { useNavigate } from "react-router-dom";
import Button from "../Button";
import './RegisterButtons.css';

export default function RegisterButtons() {
    const navigate = useNavigate();
    
    return (
        <div className="registration-buttons">
            <Button onClick={() => navigate('pirate/add')}>
                New Pirate
            </Button>
            <Button onClick={() => navigate('crew/add')}>
                New Pirate Crew
            </Button>
        </div>
    )
}