import './style.css';

function WelcomeMessage({ name = "Katelynn", insult = "terrible typer" }) {
    return (
        <div className='Welcome-Message'>
            <h1>{name} is amazing but a {insult}!</h1>
        </div>
    )
}

export default WelcomeMessage;
