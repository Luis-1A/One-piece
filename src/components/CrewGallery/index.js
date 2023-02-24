import { useCrewsContext } from "../../context/Crews"
import Crew from "../Crew";
import './CrewGallery.css';

export default function CrewGallery() {
    const { crewList } = useCrewsContext();

    return (
        <div className="crew-gallery">
            {crewList.map(crew => (
                <Crew
                    key={crew.id}
                    crew={crew}
                />
            ))}
        </div>
    )
}