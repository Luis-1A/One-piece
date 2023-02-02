import './Pirate.css';

const Pirate = ({ pirate, color, onRemove }) => {
    return (
        <div className='pirateContainer'>
            <button 
                onClick={() => onRemove(pirate)} 
                className='removeBtn' 
                aria-label='Remove pirate' 
                aria-hidden={true} 
                title='Remove pirate'
            >
                ❌
            </button>
            <div className='header' style={{ backgroundColor: color }}></div>
            <img className='picture' src={pirate.image} alt={pirate.name} />
            <div className='footer'>
                <h4>{pirate.name}</h4>
                <h5 className={pirate.role.toLowerCase() === 'captain' ? 'captain' : ''}>{pirate.role}</h5>
                <h5><img className='belly' src="/images/belly.png" alt="belly currency icon" />{parseInt(pirate.bounty, 10).toLocaleString('en-US')}</h5>
            </div>
        </div>
    );
}

export default Pirate;