import React, { createContext, useState } from "react";

export const datosDelUsuario = createContext();

export const DatosDelUsuario = ({ children }) => {
  //Este estado agarra los datos del usuario para añadirlos a la orden
  const [formUser, setFormUser] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email:'',
    confirmarEmail:'',
  });
 //Este estado agarra los datos del usuario para añadirlos a la orden
  return (
    <datosDelUsuario.Provider value={{formUser,setFormUser}}>
      {children}
    </datosDelUsuario.Provider>
  );
};

export default DatosDelUsuario;
