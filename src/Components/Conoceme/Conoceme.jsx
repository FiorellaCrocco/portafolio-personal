import React from "react";
import back from "../../assets/iconoBack.png";
import front from "../../assets/iconoFront.png";
import infra from "../../assets/iconoInfra.png";
import softskills from "../../assets/iconoSoftskills.png";
import "./conoceme.css";

const Conoceme = () => {
  return (
    <div className="conoceme-container">
      <div className="text-container">
        <h2>¡Hola! Soy Fiorella Crocco</h2>
        <p>
          Una apasionada del mundo de la informática, consciente de la
          importancia de la capacitación continua, con especial interés en
          infraestructura en la nube. Me gradué en Artes Gráficas y Desarrollo
          de Software, actualmente me encuentro especializándome en backend. Mi
          formación en Desarrollo de Software es sólida dado los conocimientos
          adquiridos a través de la carrera Certified Tech Developer creada por
          Globant y Mercado Libre junto con la Universidad Tecnológica del
          Uruguay (UTEC), quien la respalda. Además de mis conocimientos previos
          como Full Stack Developer en 4Geeks Academy. Poseo una amplia gama de
          habilidades blandas y técnicas con experiencia práctica en el
          desarrollo de diversas aplicaciones junto con su respectivo
          despliegue. Gracias a mis diversos estudios tengo un panorama muy
          amplio en diferentes áreas, lo que me brinda una visión particular de
          las necesidades de los proyectos desde diversos puntos, como ser,
          diseño gráfico, experiencia de usuario, planificación y gestión
          estratégica (especialmente en metodologías ágiles dado que desde que
          inicie mi intensa formación en tecnología hace ya 4 años siempre he
          desempeñado el rol de Scrum Master) y por supuesto en desarollo,
          testing e infraestructura, junto con el desarrollo de mis habilidades blandas.
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
    </div>
  );
};

export default Conoceme;
