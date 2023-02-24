import { useContext } from "react";
import { MessageContext } from "../../context/Message";
import './Message.css';

// message will be displayed for a few seconds and then will be removed
// user can also click on the close button to remove the message manually
export default function Message() {
    const { message, setMessage } = useContext(MessageContext);

    const hideMessage = () => {
        document.querySelector('.messageContainer').style.display = 'none';
    }

    if (message) {
        setTimeout(() => {
            setMessage('');
        }, 3000);
    }
    
    return (
        message && <div className="messageContainer">
            <div className="message">
                <span onClick={hideMessage}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    )
}