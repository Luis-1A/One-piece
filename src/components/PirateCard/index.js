import './PirateCard.css';

const PirateCard = ({ pirate, color, onRemove }) => {

    // Aguardar para mostrar uma animação antes de remover
    const removerPirata = (evento, pirata) => {
        esconderCartão(evento.target.parentNode);
        setTimeout(() => onRemove(pirata), 300);
    }
    
    const esconderCartão = (cartao) => {
        cartao.classList.add('pirateDeleted');
    }

    return (
        <div className='pirateContainer'>
            <button 
                onClick={(evento) => removerPirata(evento, pirate)} 
                className='removeBtn' 
                aria-label='Remover pirata' 
                aria-hidden={true} 
                title='Remover pirata'
            >
                ❌
            </button>
            <div className='stripe' style={{ backgroundColor: color }}></div>
            <img className='picture' src={pirate.image} alt={pirate.name} />
            <div className='content'>
                <h3 className='title'>{pirate.name}</h3>
                <p className={pirate.role.toLowerCase() === 'captain' ? 'captain' : ''}>{pirate.role}</p>
                <p><img className='belly' src="/images/belly.png" alt="ícone de moeda belly" />{parseInt(pirate.bounty, 10).toLocaleString('en-US')}</p>
            </div>
        </div>
    );
}

export default PirateCard;
