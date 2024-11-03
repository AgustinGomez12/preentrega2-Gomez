import React, { useContext, useEffect, useState } from 'react';
import { datosDelUsuario } from '../context/DatosUsuarioProvider';
import { Cart } from '../context/CartProvider';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../Firebase/config';



const ModalConfirmation = ({setModalOreder,closeModal}) => {

  //Contexto para obtecion de datos del usuario y carrito, precio total
  const { formUser } = useContext(datosDelUsuario);
  const { totalPrice, cart, vaciarCarro } = useContext(Cart);
  //Contexto para obtecion de datos del usuario y carrito, precio total

  //Estado para obtener los detalles de la compra es decir Orders
  const [datos, setDatos] = useState(null);
  //Estado para obtener los detalles de la compra es decir Orders

  //Loading y error para manejar la obtecion correcta de datos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   //Loading y error para manejar la obtecion correcta de datos


 //Effecto para la obtecion total de datos
  useEffect(() => {
    const obtenerDatos = async () => {
      setLoading(true);
      setError(null);
      let encontrado = false;

      const fetchOrder = async () => {
        try {
          const ordersRef = collection(db, "orders");
          const q = query(ordersRef, orderBy("timestamp", "desc"), limit(1));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            const data = { id: doc.id, ...doc.data() };
            if (data.timestamp) {
              setDatos(data);
              encontrado = true;
              setLoading(false);
            } else {
              setError("Timestamp no disponible, reintentando...");
            }
            setError(false)
          } else {
            setLoading(false);
          }
        } catch (error) {
          console.log("Error obteniendo los documentos:", error);
          setError("Error obteniendo los datos de la orden.");
          setLoading(false);
        }
      };

      // Reintentar cada 3 segundos hasta que se obtengan los datos
      const intervalId = setInterval(async () => {
        if (!encontrado) {
          await fetchOrder();
        } else {
          clearInterval(intervalId);
        }
      }, 3000);
    // Reintentar cada 3 segundos hasta que se obtengan los datos


      // Intento inicial
      fetchOrder();
      
    };
setError("")
    obtenerDatos();
  }, [cart]);
//Effecto para la obtecion total de datos

//Map para correcta obtecion de los titulos de los productos y separacion
  const productosComprados = cart.map(item => item.titulo).join(", ");
//Map para correcta obtecion de los titulos de los productos y separacion

//Funcion para el boton de finalizar la compra 
const handleModal = () => {
    setModalOreder(false)
    closeModal(false)
    vaciarCarro()
}
//Funcion para el boton de finalizar la compra 

  return (
    <div className='modaUserCompra'>
      <h3>Detalles de la compra</h3>
      {loading ? (
        <h2>Cargando...</h2>
      ) : formUser ? (
        <div className='datosUserCompra'>
          <h2>Datos del usuario</h2>
          <p>Gracias por la compra: {formUser.nombre + " " + formUser.apellido}</p>
          <p>Email: {formUser.email}</p>
          <p>Teléfono: {formUser.telefono}</p>
          <h2>Datos de la compra</h2>
          <p>Precio total: $ {totalPrice}</p>
          <p>Objetos comprados: {productosComprados}</p>
          {datos && datos.id && datos.timestamp ? (
            <div className='DetallesCompra'>
              <h2>Detalles de la última orden</h2>
              <p>ID de la Orden: {datos.id}</p>
              <p>Fecha de Orden: {datos.timestamp.toDate().toLocaleString()}</p>

              <button onClick={handleModal}>Finalizar pedido</button>
            </div>
            
          ) : (
            <p>Espere intentado obtener los datos...</p>
          )}
        </div>
      ) : (
        <p>No hay datos del usuario disponibles</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default ModalConfirmation;
