import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";

const CrewsContext = createContext();

export function CrewsProvider({ children }) {
    const [crewList, setCrewList] = useState([]);

    return (
        <CrewsContext.Provider value={{ crewList, setCrewList }} >
            {children}
        </CrewsContext.Provider>
    )
}

export function useCrewsContext() {
    const { crewList, setCrewList } = useContext(CrewsContext);

    useEffect(() => {
        setCrewList(api.getCrew());
    }, [setCrewList])

    const addCrew = (crew) => {
        // using the API's return to update the state
        const updatedList = api.addCrew(crew);
        setCrewList(updatedList);
        // showMessage('Crew added to the database');
    }

    return {crewList, addCrew};
}