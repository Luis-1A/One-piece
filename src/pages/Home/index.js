import { useState } from "react";
import CrewGallery from "../../components/CrewGallery";
import Memorandum from "../../components/Memorandum";
import RegisterButtons from "../../components/RegisterButtons";
import './Home.css';

export default function Home() {

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

            <RegisterButtons />

            {message && <p className="message">{message}</p>}

            <CrewGallery />
        </>
    )
}