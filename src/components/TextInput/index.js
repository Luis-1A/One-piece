    import './TextInput.css';

// a different coding style to create a function component
// create a constant, which receives an arrow function, and export this constant
const TextInput = ({required, label, placeholder, text, onChange}) => {

    const onTyped = (e) => {
        onChange(e.target.value);
    }
    
    return (
        <div className="text-field">
            <label htmlFor="">{label}</label>
            <input value={text} type="text" placeholder={placeholder} required={required} onChange={onTyped}/>
        </div>
    );
}

export default TextInput;