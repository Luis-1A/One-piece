import Pirate from '../Pirate';
import './Crew.css';

const Crew = ({ crew, members, onPirateRemove }) => {
    return (
        members.length > 0 && <section className='crew-container' style={{ backgroundColor: crew.color }} >
            <div className="crew-header">
                <h3>{crew.name}</h3>
                <img src={crew.image} alt="Pirate Flag" />
            </div>
            <div className="crew-members">
                {members.map(member => (
                    <Pirate 
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