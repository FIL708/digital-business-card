import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Main() {
    return (
        <main>
            <section className="main--introduction">
                <h3 className="main--name">Filip Żebrowski</h3>
                <h4 className="main--title">Frontend Developer</h4>
                <div className="buttons">
                    <a 
                        href="mailto: example@exaple.com"
                        className='main--mail button'>
                        <GrMail className="button-icons"/>Email
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/filipzebrowski/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='main--linkedin button'>
                        <FaLinkedin className="button-icons"/> LinkedIn
                    </a>
                </div>
            </section>
            <section className="main--description">
                <h4>About</h4>
                <p className="main--interestsPara">Veterinary diagnostician with 3+ years of experience. I have been interested in IT industry for several years. My goal is to develop my career in this branch. </p>
                <h4>Interests</h4>
                <p className="main--interestsPara">Programming. Web development. Database. PC building. Veterinary diagnostics. New technology. Mountain hike.</p>
            </section>
        </main>
    )
}