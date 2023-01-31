import './InputField.css';

// a different coding style to create a function component
// create a constant, which receives an arrow function, and export this constant
const InputField = ({type='text', required, label, placeholder, value, onChange}) => {

    const onTyped = (e) => {
        onChange(e.target.value);
    }
    
    return (
        <div className={`input-container input-${type}`}>
            <label htmlFor="">{label}</label>
            <input 
                value={value} 
                type={type} 
                placeholder={placeholder} 
                required={required} 
                onChange={onTyped}
                className
            />
        </div>
    );
}

export default InputField;