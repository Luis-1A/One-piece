import PirateCard from "../PirateCard";
import './PiratesGallery.css';

export default function PiratesGallery({ pirates, crewColor }) {
    return (
        <div className="pirates-gallery">
            {pirates.map(pirate => (
                <PirateCard
                    key={pirate.id}
                    pirate={pirate}
                    color={crewColor}
                />
            ))}
        </div>
    )
}