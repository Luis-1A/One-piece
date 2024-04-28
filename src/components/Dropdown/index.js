import './Dropdown.css';

const Dropdown = ({ required, label, items, option, onChange }) => {
    return (
        <div className='dropdown-container'>
            <label>{label}</label>
            <select required={required} value={option} onChange={(e) => onChange(e.target.value)}>
                <option value="">Selecione uma Tripulação</option>
                {items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
        </div>
    );
}

export default Dropdown;
