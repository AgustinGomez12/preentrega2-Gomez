import React, { useContext, useEffect, useState } from "react";
import endPurChase from "../services/endPurchase";
import { datosDelUsuario } from "../context/DatosUsuarioProvider";

const Modal = ({ modal, setModal, cart }) => {
  //Contexto para funcionamiento del form
  const { formUser, setFormUser } = useContext(datosDelUsuario);
  //Contexto para funcionamiento del form

  //Estado para validar el form
  const [formValid, setFormValid] = useState(false);
  //Estado para validar el form

  //Funcion para cerrar el modal
  const closeModal = () => {
    setModal(!modal);
  };
   //Funcion para cerrar el modal

  //Funcion para darle el respectivo funcionamiento al input
  const handleChange = (e) => {
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  };
  //Funcion para darle el respectivo funcionamiento al input


  //Funcion para prevenir el envio del form y validar los inputs de email
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formUser.email !== formUser.confirmarEmail) {
      console.log("los emails no coinciden");
      return;
    }
  };
 //Funcion para prevenir el envio del form y validar los inputs de email 

 //Efecto usado para que el boton no aparezca almenos que el usuario llene el form
  useEffect(() => {
    const isFormFilled = Object.values(formUser).every((field) => field !== "");
    setFormValid(isFormFilled);
  }, [formUser]);
 //Efecto usado para que el boton no aparezca almenos que el usuario llene el form
  return (
    <div className="containerModal">
      <div>
        <p onClick={closeModal}>X</p>
        <h2>Copleta los datos para finalizar la compra</h2>

        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} name="nombre" type="text" value={formUser.nombre}  placeholder="Nombre" />
          <input onChange={handleChange} name="apellido" type="text" value={formUser.apellido} placeholder="Apellido" />
          <input onChange={handleChange} name="telefono" type="number" value={formUser.telefono} placeholder="Telefono" />
          <input onChange={handleChange} name="email" type="email" value={formUser.email} placeholder="Email" />
          <input onChange={handleChange} name="confirmarEmail" type="email" value={formUser.confirmarEmail} placeholder="ConfirmarEmail" />
          {
            formValid && (<button onClick={() => endPurChase(cart,formUser)}>Confirma compra</button>)
          }
          
        </form>
      </div>
    </div>
  );
};

export default Modal;
