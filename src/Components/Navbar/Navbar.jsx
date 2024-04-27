import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/FCG.png";
import "./navbar.css";

const Navbar = () => {

  const navigate = useNavigate();

  const handleInicio = () => {
    navigate(`/`);
  };

  const handleProyectos = () => {
    navigate(`/proyectos`);
  };

  const handleClick = () => {
    navigate(`/conoceme`);
  };

  const handleBlog = () => {
    navigate(`/blog`);
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
        <div className="header-right">
          <p className="secciones" onClick={handleInicio}>Inicio</p>     
          <p className="secciones" onClick={handleProyectos}>Proyectos</p>
          <p className="secciones" onClick={handleClick}>Conoceme</p>
          <p className="secciones" onClick={handleBlog}>Blog</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
