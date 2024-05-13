import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="conoceme-footer">
        <ul>
          <li className="item">
            <a href="https://github.com/FiorellaCrocco" target="_blank">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/fiorellacroccograppiolo/"
              target="_blank"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
          </li>
          <li className="item">
            <a href="mailto:fcgrappiolo@gmail.com" target="_blank">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p className="read-the-docs">
          {" "}
          © 2024 - Fiorella Crocco Grappiolo - Todos los derechos reservados.{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
