import { usePiratesContext } from '../../context/Pirates';
import PiratesGallery from '../PiratesGallery';
import './Crew.css';

const Crew = ({ crew }) => {
    const { piratesList } = usePiratesContext();

    const members = piratesList.filter(pirate => pirate.crewId === crew.id);

    return (
        members.length > 0 && <section className='crew-container' style={{ backgroundColor: crew.color }} >
            <div className="crew-header">
                <h2>{crew.name}</h2>
                <img src={crew.image} alt="Pirate Flag" />
            </div>
            <PiratesGallery pirates={members} crewColor={crew.color} />
        </section>
    );
}

export default Crew;