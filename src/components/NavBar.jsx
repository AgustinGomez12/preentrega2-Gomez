import { NavLink } from "react-router-dom";
import imgenLogo from "../assets/logo-fowards.png";
import "../scss/styles/base.scss";
import "../scss/styles/navbar.scss";
import "../scss/styles/linksstyle.scss";
import { CartWidget } from "./CartWidget";

const NavBar = ({ cuenta, children }) => {
  return (
    <header>
      {children}
      <div className="contenedor-navbar">
        <div className="container-logo">
          <img src={imgenLogo} alt="" />
          <h1>Fowards</h1>
        </div>
        <div className="container-estructuraCarYSpan">
          <CartWidget cuenta={cuenta} />
        </div>
        <div className="container-links">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => {
                 return isActive ? "links" : "linksNoactivo";
                }}
                to={`/`}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => {
                 return isActive ? "links" : "linksNoactivo";
                }} to={`/category/Remeras`}>
                Remeras
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => {
                 return isActive ? "links" : "linksNoactivo";
                }} to={`/category/Pantalones`}>
                Pantalones
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => {
                 return isActive ? "links" : "linksNoactivo";
                }} to={`/category/Shorts`}>
                Shorts
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => {
                 return isActive ? "links" : "linksNoactivo";
                }} to={"/Registrarse"}>
                Registrarse
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => {
                 return isActive ? "links" : "linksNoactivo";
                }} to={"/Iniciar sesiòn"}>
                iniciar sesión
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => {
                 return isActive ? "links" : "linksNoactivo";
                }} to={"/Quienes Somos"}>
                ¿Quienes somos?
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
