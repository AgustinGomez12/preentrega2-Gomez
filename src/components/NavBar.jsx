import { Link } from "react-router-dom";
import imgenLogo from "../assets/logo-fowards.png";
import "../scss/styles/base.scss";
import "../scss/styles/navbar.scss";
import { CartWidget } from "./CartWidget";


const NavBar = ({cuenta}) => {

  return (
    <header>
      <div className="contenedor-navbar">
        <div className="container-logo">
          <img src={imgenLogo} alt="" />
          <h1>Fowards</h1>
        </div>
        <div className="container-estructuraCarYSpan">
          <CartWidget cuenta={cuenta}/>
        </div>
        <div className="container-links">
          <ul>
            <li>
              <Link to={"/preentrega1-Gomez"} >Inicio</Link>
            </li>
            <li>
              <Link to={"/category/Remeras"}>Remeras</Link>
            </li>
            <li>
              <Link to={"/category/Pantalones"}>Pantalones</Link>
            </li>
            <li>
              <Link to={"/category/Shorts"}>Shorts</Link>
            </li>
            <li>
              <Link to={"/category/Registrarse"}>Registrarse</Link>
            </li>
            <li>
              <Link to={"/category/Iniciar sesiòn"}>iniciar sesión</Link>
            </li>
            <li>
              <Link to={"/category/Quienes Somos"}>¿Quienes somos?</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
