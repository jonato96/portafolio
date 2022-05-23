import "./contact.scss"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Contact(){    
    return(
        <div className="contact">
            <h1>
                Gracias por llegar hasta <code>aqui</code>
            </h1>
            <h3>
                No te olvides de pasar por mis redes
            </h3>
            <div className="social">
                <a href="https://www.youtube.com" target="_blank" title="Youtube" className="youtube">
                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                </a>
                <a href="https://twitter.com/jonato96" target="_blank" title="Twitter" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} size="2x"/>
                </a>
                <a href="https://github.com/jonato96" target="_blank" title="Github" className="github">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
                <a href="https://instagram.com/jonato96" target="_blank" title="Instagram" className="instagram">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
                <a href="https://facebook.com" target="_blank" title="Facebook" className="facebook">
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                </a>
            </div>
            
        </div>
    );
}