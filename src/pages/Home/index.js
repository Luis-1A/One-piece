import { useEffect } from "react";
import CrewGallery from "../../components/CrewGallery";
import Memorandum from "../../components/Memorandum";
import Message from "../../components/Message";
import RegisterButtons from "../../components/RegisterButtons";
import './Home.css';

export default function Home() {
    // go to the top of the page whenever the page reloads
    useEffect(()=> {
        window.scrollTo(0, 0);
    })    

    return (
        <>
            <Memorandum />
            <RegisterButtons  />
            <Message />
            <CrewGallery />
        </>
    )
}