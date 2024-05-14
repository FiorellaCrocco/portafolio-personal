import React from "react";
import onlybooksThumbnail from "../../assets/onlybooks.png";
import odontologosThumbnail from "../../assets/odontologos.png";
import nemesisThumbnail from "../../assets/nemesis.png";
import "./proyectos.css";

const Proyectos = () => {
  const proyectos = [
    {
      titulo: "Onlybooks",
      descripcion:
        "OnlyBooks es el proyecto culminante que nos llevó a mis compañeros y a mí a certificarnos como Professional Developers. Utilizando Java 21, React, y MySQL, logramos crear un sistema robusto y eficiente, respaldado por AWS y Terraform para una infraestructura escalable. Con un enfoque en la seguridad, nuestro sitio está protegido con HTTPS y mejorado con Nginx como reverse proxy.",
      videoUrl:
        "https://www.linkedin.com/posts/fiorellacroccograppiolo_proyectofinal-techdeveloper-digitalhouse-activity-7140179153026293760-r7kK?utm_source=share&utm_medium=member_desktop",
      thumbnail: onlybooksThumbnail,
    },
    {
      titulo: "Clinica Odontológica",
      descripcion:
        "El sistema de gestión para Clínica Odontológica es una solución integral para la administración de pacientes y turnos, desarrollada con Java, Spring Boot, y otras tecnologías backend, complementada con Docker para despliegue eficiente. La interfaz, diseñada con HTML, Bootstrap y JavaScript, ofrece una experiencia de usuario intuitiva, contribuyendo significativamente a la eficiencia operativa del entorno odontológico.",
      videoUrl:
        "https://www.linkedin.com/posts/fiorellacroccograppiolo_proyectofinal-clinicaodontologica-desarrolloweb-activity-7086437579897630721-gqFe?utm_source=share&utm_medium=member_desktop",
      thumbnail: odontologosThumbnail,
    },
    {
      titulo: "Némesis",
      descripcion:
        "Némesis es el resultado de un apasionante desafío como Full Stack Developer, donde junto a mis colegas, hemos empleado Python, PostgreSQL y React para construir un sistema versátil como proyecto final en 4Geeks Academy Latam. Este proyecto es testimonio de nuestra habilidad para crear soluciones complejas y escalables en el ámbito del desarrollo web.",
      videoUrl:
        "https://www.linkedin.com/posts/fiorellacroccograppiolo_fullstackdeveloper-desarrolloweb-latam-activity-6871974175624507393-pb75?utm_source=share&utm_medium=member_desktop",
      thumbnail: nemesisThumbnail,
    },
  ];

  return (
    <div className="proyectos-container">
      <h2 className="proyectos-titulo">Mis Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index}>
            <h3>{proyecto.titulo}</h3>
            <a
              href={proyecto.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={proyecto.thumbnail}
                alt={`Miniatura de ${proyecto.titulo}`}
              />
            </a>
            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
