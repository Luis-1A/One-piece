import { useEffect, useState } from "react";
import { api } from "../../api/api";
import Button from "../../components/Button";
import Crew from "../../components/Crew";
import Form from "../../components/Form";
import Memorandum from "../../components/Memorandum";
import './Home.css';

export default function Home() {
    const [piratesList, setPiratesList] = useState([]);
    const [crewList, setCrewList] = useState([]);

    // show a message when a form is submitted
    const [message, setMessage] = useState('');

    // decide which form to show 
    const [showForm, setShowForm] = useState({
        pirate: false,
        crew: false
    });

    useEffect(() => {
        loadInitialData();
    }, []);

    const loadInitialData = () => {
        setPiratesList(api.getPirates());
        setCrewList(api.getCrew());
    }

    const addNewPirate = (pirate) => {
        // using an updater function to update the state and update the api
        setPiratesList(piratesList => {
            const listUpdated = [...piratesList, pirate]
            api.update('pirates', listUpdated);
            return listUpdated;
        })
        toggleForm('pirate');
        showMessage('Pirate added to the database');
    }

    const addNewCrew = (crew) => {
        // using the API's return to update the state
        const updatedList = api.addCrew(crew);
        setCrewList(updatedList);
        toggleForm('crew');
        showMessage('Crew added to the database');
    }

    const removePirate = (pirate) => {
        const updatedList = api.deletePirate(pirate);
        setPiratesList(updatedList);
    }

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


    // show/hide Registration forms
    const toggleForm = (type) => {
        scrollScreen();
        if (type === 'pirate') {
            setShowForm({
                'pirate': !showForm['pirate'],
                'crew': false
            });
        }
        if (type === 'crew') {
            setShowForm({
                'crew': !showForm.crew,
                'pirate': false
            });
        }
    }

    return (
        <>
            <Memorandum />

            <div className="registration-buttons">
                <Button onClick={() => toggleForm('pirate')}>
                    {showForm.pirate ? '-' : '+'} New Pirate
                </Button>
                <Button onClick={() => toggleForm('crew')}>
                    {showForm.crew ? '-' : '+'} New Pirate Crew
                </Button>
            </div>

            {message && <p className="message">{message}</p>}

            <Form
                type='pirate'
                crewList={crewList}
                onAdd={pirate => addNewPirate(pirate)}
                onCancel={toggleForm}
                active={showForm.pirate}
            />

            <Form
                type='crew'
                onAdd={crew => addNewCrew(crew)}
                onCancel={toggleForm}
                active={showForm.crew}
            />

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