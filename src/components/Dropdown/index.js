import './Dropdown.css';

const Dropdown = ({required, label, itens, option, onChange}) => {
    
    return (
        <div className='dropdown-container'>
            <label>{label}</label>
            <select required={required} value={option} onChange={(e) => onChange(e.target.value)}>
                <option value="">Selecione um time</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Dropdown;