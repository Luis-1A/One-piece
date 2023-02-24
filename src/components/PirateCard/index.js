import { usePiratesContext } from '../../context/Pirates';
import './PirateCard.css';

const PirateCard = ({ pirate, color }) => {
    const { removePirate } = usePiratesContext()

    // wait to show an animation before removing
    const onRemove = (event, pirate) => {
        hideCard(event.target.parentNode);
        setTimeout(() => removePirate(pirate), 300);
    }
    
    const hideCard = (card) => {
        card.classList.add('pirateDeleted');
    }

    return (
        <div className='pirateContainer'>
            <button 
                onClick={(event) => onRemove(event, pirate)} 
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