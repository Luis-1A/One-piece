import Pirate from '../Pirate';
import './Crew.css';

const Crew = ({ crew, members }) => {
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
                        name={member.name} 
                        role={member.role} 
                        bounty={member.bounty} 
                        image={member.image} 
                        bg={crew.color}
                    />
                ))}
            </div>
        </section>
    );
}

export default Crew;