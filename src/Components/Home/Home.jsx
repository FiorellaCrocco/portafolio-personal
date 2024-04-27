import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./home.css";
import perfil from "../../assets/perfil.jpg";

const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/conoceme`);
  };

  return (
    <div className="rootHome">
      <div className="bodyHome">
        <div className="presentacion">
          <h1>Fiorella Crocco Grappiolo</h1>
          <h3>
            ¡Hola! Soy desarrolladora de software apasionada por el backend y la
            infraestructura en la nube. ¡Bienvenido a mi portafolio!
          </h3>
          <button className="proyectosHome" onClick={handleClick}>
            Sobre mí
          </button>
        </div>
        <div className="image-container">
          <img src={perfil} alt="Mi perfil" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
