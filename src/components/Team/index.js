import Member from '../Member';
import './Team.css';

const Team = ({ name, primaryColor, secondaryColor, members }) => {
    return (
        members.length > 0 && <section className='teamContainer' style={{ backgroundColor: secondaryColor }} >
            <h3>{name}</h3>
            <span style={{ borderColor: primaryColor }} ></span>
            <div className="memberList">
                {members.map(member => (
                    <Member 
                        key={member.name} 
                        name={member.name} 
                        role={member.role} 
                        bounty={member.bounty} 
                        image={member.image} 
                        bg={primaryColor}
                    />
                ))}
            </div>
        </section>
    );
}

export default Team;