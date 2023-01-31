import './Pirate.css';

const Pirate = ({ name, role, bounty, image, bg }) => {
    return (
        <div className='pirateContainer'>
            <div className='header' style={{ backgroundColor: bg }}></div>
            <img className='picture' src={image} alt={name} />
            <div className='footer'>
                <h4>{name}</h4>
                <h5 className={role.toLowerCase() === 'captain' ? 'captain' : ''}>{role}</h5>
                <h5><img className='belly' src="/images/belly.png" alt="belly currency icon" />{parseInt(bounty, 10).toLocaleString('en-US')}</h5>
            </div>
        </div>
    );
}

export default Pirate;