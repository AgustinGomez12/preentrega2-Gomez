import React, { useContext, useEffect, useState } from "react";
import endPurChase from "../services/endPurchase";
import { datosDelUsuario } from "../context/DatosUsuarioProvider";
import ModalConfirmation from "./ModalConfirmation";

const Modal = ({ modal, setModal, cart , eliminarItem }) => {
  //Contexto para funcionamiento del form
  const { formUser, setFormUser } = useContext(datosDelUsuario);
  //Contexto para funcionamiento del form

  //Estado para validar el form
  const [formValid, setFormValid] = useState(false);
  //Estado para validar el form

  //Estado modal oreden generada
  const [modalOrder,setModalOreder] = useState(false)

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

 //Effecto usado para que el boton no aparezca almenos que el usuario llene el form
  useEffect(() => {
    const isFormFilled = Object.values(formUser).every((field) => field !== "");
    setFormValid(isFormFilled);
  }, [formUser]);
 //Effecto usado para que el boton no aparezca almenos que el usuario llene el form
  return (
    <div className="containerModal">
      <div className="modal">
        <p onClick={closeModal}>X</p>
        <h2>La compra solo puede finalizarse si se llenan los campos, completalos y veras el boton 🧐</h2>
        <h2>En caso de arrepetimiento preciona la ❌</h2>

        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} name="nombre" type="text" value={formUser.nombre}  placeholder="Nombre" />
          <input onChange={handleChange} name="apellido" type="text" value={formUser.apellido} placeholder="Apellido" />
          <input onChange={handleChange} name="telefono" type="number" value={formUser.telefono} placeholder="Telefono" />
          <input onChange={handleChange} name="email" type="email" value={formUser.email} placeholder="Email" />
          <input onChange={handleChange} name="confirmarEmail" type="email" value={formUser.confirmarEmail} placeholder="ConfirmarEmail" />
          {
            formValid && (<button onClick={() => endPurChase(cart,formUser,setModalOreder(true))}>Confirmar compra</button>)
          }
       
        </form>


      </div>
         {
          modalOrder && (<ModalConfirmation setModalOreder={setModalOreder} closeModal={closeModal} eliminarItem={eliminarItem}/>)
          }
    </div>
  );
};

export default Modal;
