import React from "react";
import "../scss/styles/inciarsecion.scss";
const IniciarSesion = () => {
  return (
    <main className="main-iniciarSesion">
      <div className="container-iniciarSecion">
        <h2>Iniciar sesiòn</h2>
        <div className="container-inputs">
          <label htmlFor="">
            Email
            <input placeholder="Ej:pepito@gamil.com" type="email" />
          </label>
          <label htmlFor="">
            Contraseña
            <input placeholder="Ingrese una contraseña" type="password" />
          </label>
          <button>Enviar</button>
        </div>
      </div>
    </main>
  );
};

export default IniciarSesion;
