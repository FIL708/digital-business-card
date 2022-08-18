import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaGithubSquare  } from "react-icons/fa";

export default function Main() {
    return (
        <footer>
            <a 
            href="https://www.linkedin.com/in/filipzebrowski/" 
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin/>
            </a>
            <a 
            href="https://www.facebook.com/f.zebrowski/" 
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookSquare/>
            </a>
            <a 
            href="https://www.instagram.com/fil_ski9/" 
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagramSquare/>
            </a>
            <a 
            href="https://github.com/FIL708" 
            target="_blank"
            rel="noopener noreferrer">
            <FaGithubSquare/>
            </a>
        </footer>
    )
}