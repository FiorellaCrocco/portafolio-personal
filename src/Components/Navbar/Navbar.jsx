import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/FCG.png";
import useWindowSize from '../../Hooks/useWindowSize';
import "./navbar.css";

const Navbar = () => {
  const { width } = useWindowSize(); // No necesitas 'height' si no lo estás usando
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMobile(width <= 768); // Actualiza isMobile basado en el ancho de la ventana
  }, [width]); // Este efecto se ejecutará cada vez que 'width' cambie

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <div className="lema">
            <p>Fiorella Crocco Grappiolo</p>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu} style={{ display: isMobile ? 'block' : 'none' }}>
          <div className={isOpen ? "hamburger open" : "hamburger"}></div>
        </div>
        <div className={`header-right ${isOpen && isMobile ? 'open' : ''}`} style={{ display: isMobile && isOpen ? 'flex' : 'none' }}>
          <p className="secciones" onClick={() => handleNavigation('/')}>Inicio</p>
          <p className="secciones" onClick={() => handleNavigation('/proyectos')}>Proyectos</p>
          <p className="secciones" onClick={() => handleNavigation('/conoceme')}>Conoceme</p>
          <p className="secciones" onClick={() => handleNavigation('/blog')}>Blog</p>
        </div>
        {!isMobile && (
          <div className="header-right">
            <p className="secciones" onClick={() => handleNavigation('/')}>Inicio</p>
            <p className="secciones" onClick={() => handleNavigation('/proyectos')}>Proyectos</p>
            <p className="secciones" onClick={() => handleNavigation('/conoceme')}>Conoceme</p>
            <p className="secciones" onClick={() => handleNavigation('/blog')}>Blog</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
