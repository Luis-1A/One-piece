import Pirate from '../Pirate';
import './Crew.css';

const Crew = ({ crew, members }) => {
    return (
        members.length > 0 && <section className='crew-container' style={{ backgroundColor: crew.secondaryColor }} >
            <div className="crew-header">
                <div className="crew-name">
                    <h3>{crew.name}</h3>
                    <span style={{ borderColor: crew.primaryColor }} ></span>
                </div>
                <img src={crew.image} alt="Pirate Flag" className='crew-flag' />
            </div>
            <div className="crew-members">
                {members.map(member => (
                    <Pirate 
                        key={member.name} 
                        name={member.name} 
                        role={member.role} 
                        bounty={member.bounty} 
                        image={member.image} 
                        bg={crew.primaryColor}
                    />
                ))}
            </div>
        </section>
    );
}

export default Crew;