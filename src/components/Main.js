export default function Main() {
    return (
        <main>
            <section className="main--introduction">
                <h3>Filip Żebrowski</h3>
                <h4>Frontend Developer</h4>
                <a 
                    href="mailto: example@exaple.com"
                    className='header--mail-button'>
                    Email
                </a>
                <a 
                    href="https://www.linkedin.com/in/filipzebrowski/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='header--linkedin-button'>
                    LinkedIn
                </a>
            </section>
            <section className="main--description">
                <h4>About</h4>
                <p>Something</p>
                <h4>Interests</h4>
                <p>Something</p>
            </section>
        </main>
    )
}