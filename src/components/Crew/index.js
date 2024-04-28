import PirateCard from '../PirateCard';
import './Crew.css';

const Crew = ({ crew, members, onPirateRemove }) => {
    return (
        members.length > 0 && <section className='crew-container' style={{ backgroundColor: crew.color }} >
            <div className="crew-header">
                <h2>{crew.name}</h2>
                <img src={crew.image} alt="Bandeira dos Piratas" />
            </div>
            <div className="crew-members">
                {members.map(member => (
                    <PirateCard 
                        key={member.id} 
                        pirate={member}
                        color={crew.color}
                        onRemove={onPirateRemove}
                    />
                ))}
            </div>
        </section>
    );
}

export default Crew;
