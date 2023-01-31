import './Dropdown.css';

const Dropdown = ({required, label, itens, option, onChange}) => {
    
    return (
        <div className='dropdown-container'>
            <label>{label}</label>
            <select required={required} value={option} onChange={(e) => onChange(e.target.value)}>
                <option value="">Select a Crew</option>
                {itens.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
        </div>
    );
}

export default Dropdown;