import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Crew from "../../components/Crew";
import Memorandum from "../../components/Memorandum";
import { useCrewsContext } from "../../context/Crews";
import { usePiratesContext } from "../../context/Pirates";
import './Home.css';

export default function Home() {
    const { piratesList, removePirate } = usePiratesContext();
    const { crewList } = useCrewsContext();
    const navigate = useNavigate();

    // show a message when a form is submitted
    const [message, setMessage] = useState('');
    
    // scroll the screen to the buttons area (form is hidden after submission)
    const scrollScreen = () => {
        setTimeout(() => {
            document.querySelector('.registration-buttons').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }

    // message to show after a pirate or crew is added
    const showMessage = (message) => {
        scrollScreen();
        setTimeout(() => {
            setMessage(message);
        }, 500);
        setTimeout(() => {
            setMessage('');
        }, 4500);
    }    

    return (
        <>
            <Memorandum />

            <div className="registration-buttons">
                <Button onClick={() => navigate('/pirate/add')}>
                    New Pirate
                </Button>
                <Button onClick={() => navigate('/crew/add')}>
                    New Pirate Crew
                </Button>
            </div>

            {message && <p className="message">{message}</p>}

            <div className="crew-gallery">
                {crewList.map(crew => (
                    <Crew
                        key={crew.id}
                        crew={crew}
                        members={piratesList.filter(pirate => pirate.crewId === crew.id)}
                        onPirateRemove={pirate => removePirate(pirate)}
                    />
                ))}
            </div>
        </>
    )
}