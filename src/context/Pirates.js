import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { MessageContext } from "./Message";

const PiratesContext = createContext();

export function PiratesProvider({ children }) {
    const [piratesList, setPiratesList] = useState([]);

    return (
        <PiratesContext.Provider value={{ piratesList, setPiratesList }}>
            {children}
        </PiratesContext.Provider>
    )
}

export function usePiratesContext() {
    const { piratesList, setPiratesList } = useContext(PiratesContext);
    const { setMessage } = useContext(MessageContext);
    
    useEffect(() => {
        setPiratesList(api.getPirates());
    }, [setPiratesList]);

    const addPirate = (pirate) => {
        // using an updater function to update the state and update the api
        setPiratesList(piratesList => {
            const listUpdated = [...piratesList, pirate]
            api.update('pirates', listUpdated);
            return listUpdated;
        })
        setMessage('Pirate added to the database');
    }

    const removePirate = (pirate) => {
        const updatedList = api.deletePirate(pirate);
        setPiratesList(updatedList);
    }

    return {piratesList, addPirate, removePirate}
}