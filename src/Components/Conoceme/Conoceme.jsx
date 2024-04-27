import React from "react";
import back from "../../assets/iconoBack.png";
import front from "../../assets/iconoFront.png";
import infra from "../../assets/iconoInfra.png";
import softskills from "../../assets/iconoSoftskills.png";
import "./conoceme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Conoceme = () => {
  return (
    <div className="conoceme-container">
      <div className="text-container">
        <h2>¡Hola! Soy Fiorella Crocco</h2>
        <p>
          Soy una apasionada del mundo de la informática y emocionada de seguir
          capacitándome en infraestructura en la nube. Me gradué en Artes
          Gráficas y Desarrollo de Software, actualmente me encuentro
          especializándome en backend. Con una sólida formación en Desarrollo de
          Software, adquirida a través de la carrera en Digital House y
          respaldada por la Universidad Tecnológica del Uruguay (UTEC), poseo
          una amplia gama de habilidades blandas y técnicas con experiencia
          práctica en el desarrollo de aplicaciones.
        </p>
      </div>
      <div className="conocimientos">
        <div className="card">
          <img src={back} alt="Icono back" />
          <h3>Backend</h3>
          <p>
            Manejo patrones de diseño, y tengo conocimientos de microservicios
          </p>
          <ul>
            <li>Java / Spring Boot</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Hibernate</li>
            <li>Python / SQL Alchemy</li>
          </ul>
        </div>
        <div className="card">
          <img src={infra} alt="Icono infra" />
          <h3>Infraestructura</h3>
          <p>
            Disfruto utilizar herramientas de agilidad <br /> y de
            infraestructura en la nube
          </p>
          <ul>
            <li>Ansible</li>
            <li>Terraform</li>
            <li>Docker</li>
            <li>Nginx</li>
            <li>Amazon Web Services (AWS)</li>
          </ul>
        </div>
        <div className="card">
          <img src={front} alt="Icono front" />
          <h3>Frontend</h3>
          <p>Manejo las herramientas básicas y la librería de React</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className="card">
          <img src={softskills} alt="Icono softskills" />
          <h3>Habilidades blandas</h3>
          <p>
            Soy alegre, empática y consciente de la importancia de la
            comunicación
          </p>
          <ul>
            <li>Liderazgo</li>
            <li>Comunicación</li>
            <li>Organización</li>
            <li>Trabajo en equipo</li>
            <li>Resolución de conflictos</li>
          </ul>
        </div>
      </div>
      <div className="conoceme-footer">
        <ul>
          <li className="item">
            <a href="https://github.com/FiorellaCrocco" target="_blank">
              <FontAwesomeIcon className="icon" icon={faGithub} />
              {/*  <FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon"/>*/}
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/fiorellacroccograppiolo/"
              target="_blank"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
              {/* <FontAwesomeIcon icon="fa-brands fa-github" className="icon"/>*/}
            </a>
          </li>
          <li className="item">
            <a href="mailto:fcgrappiolo@gmail.com" target="_blank">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              {/*   <FontAwesomeIcon icon="fa-regular fa-envelope" className="icon"/>*/}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Conoceme;
