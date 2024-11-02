import React, { createContext, useState } from "react";

export const datosDelUsuario = createContext();

export const DatosDelUsuario = ({ children }) => {
  const [formUser, setFormUser] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email:'',
    confirmarEmail:'',
  });

  return (
    <datosDelUsuario.Provider value={{formUser,setFormUser}}>
      {children}
    </datosDelUsuario.Provider>
  );
};

export default DatosDelUsuario;
