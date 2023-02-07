import './Memorandum.css'

// show full text (text is partially hidden on smaller screens)
const showMemorandum = (e) => {
    document.querySelector('.memorandum').style.maxHeight = '100%';
    e.target.parentNode.style.display = 'none';
}

export default function Memoradum() {
    return (
        <section className='memorandum'>
            <h2>Important Message</h2>
            <p><strong>Attention all Officers and Infantry members stationed at the New World!</strong></p>
            <p>The so-called "Worst Generation" is sailing our waters and it's imperative that we capture them and their crew.</p>
            <p>Below you'll find the organizational chart of known pirate crews. If you find any of these rascals, do not engage in battle and report immediately to your Captain. I repeat: <strong>do not engage in battle!</strong> These are extremely dangerous pirates with bounties of over <span className='noLineBreak'><img src='/images/belly.png' alt='belly currency' className='belly' />100,000,000</span>.</p>
            <p>If necessary, use the correspondent buttons to register a new pirate or pirate crew.</p>
            <p className='signature'>— Fleet Admiral Sakazuki</p>
            <div className="read-memorandum">
                <button onClick={showMemorandum}>Read More</button>
            </div>
        </section>
    )
}