import './PirateCard.css';

const PirateCard = ({ pirate, color, onRemove }) => {
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
            <div className='stripe' style={{ backgroundColor: color }}></div>
            <img className='picture' src={pirate.image} alt={pirate.name} />
            <div className='content'>
                <h3 className='title'>{pirate.name}</h3>
                <p className={pirate.role.toLowerCase() === 'captain' ? 'captain' : ''}>{pirate.role}</p>
                <p><img className='belly' src="/images/belly.png" alt="belly currency icon" />{parseInt(pirate.bounty, 10).toLocaleString('en-US')}</p>
            </div>
        </div>
    );
}

export default PirateCard;