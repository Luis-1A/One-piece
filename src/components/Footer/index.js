import './Footer.css';

const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className="socials">
                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/fb.png" alt="Facebook" />                    
                </a>
                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/tw.png" alt="Twitter" />                    
                </a>
                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/ig.png" alt="Instagram" />                    
                </a>
            </div>
            <img src="/images/logo.png" alt="Logo da Organo" />
            <p>Desenvolvido por Alura</p>
        </footer>
    );
}

export default Footer;