import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";

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
        // showMessage('Pirate added to the database');
    }

    const removePirate = (pirate) => {
        const updatedList = api.deletePirate(pirate);
        setPiratesList(updatedList);
    }

    return {piratesList, addPirate, removePirate}
}