import './Member.css';

const Member = ({ name, role, bounty, image, bg }) => {
    return (
        <div className='memberContainer'>
            <div className='header' style={{ backgroundColor: bg }}>
                <img className='picture' src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
                <h5><img className='belly' src="/images/belly.png" alt="belly currency icon" />{parseInt(bounty, 10).toLocaleString('en-US')}</h5>
            </div>
        </div>
    );
}

export default Member;