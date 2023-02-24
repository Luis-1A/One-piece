import { useNavigate } from "react-router-dom";
import Button from "../Button";
import './Form.css';

export default function FormTemplate({ title, onSave, children }) {
    const navigate = useNavigate();

    return (
        <section className='form-container'>
            <form onSubmit={onSave}>
                <h2>{title}</h2>

                {children}

                <div className="buttons-container">
                    <Button type="submit">Register</Button>
                    <Button onClick={() => navigate('/')}>Cancel</Button>
                </div>
            </form>
        </section>
    )
}