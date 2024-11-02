import "../scss/styles/itemlistcontainer.scss";
import "../scss/styles/base.scss";
import ContainerFlechas from "./ContainerFlechas";
import Titles from "./Titles";
import CarruselAuto from "./CarruselAuto";
import { useContext, useEffect, useState } from "react";
import { collection,query,where,getDocs, doc } from "firebase/firestore";
import { db } from "../Firebase/config";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { movimientoCarrusel } from "../context/LogicaCarrusel";

export const ItemListContainer = ({ greeting, aumentarCuenta, children }) => {
  
  //Context para mover carrito
  const {position} = useContext(movimientoCarrusel) 
  //Context para mover carrito
  
  //loding
  const [loding, setloding] = useState(false)
  //loding

  //Estado para productos
  const [productos, mostrarProductos] = useState([]);
  //Estado para productos

  //params
  const { categoryId } = useParams();
  //params

 
  //Effecto usado para filtrar los productos
  useEffect(()=>{
   (async () => {
    try {
      setloding(true)
      let productosFiltrados = []
      if(categoryId){
        const q = query(collection(db,"products"),where("category","==", categoryId));
        const querySnapshots = await getDocs(q);
        querySnapshots.forEach((doc) => {
          productosFiltrados.push({id: doc.id, ...doc.data()})
        })
        setloding(false)
      }else{
       const querySnapshots = await getDocs(collection(db,"products"));
       querySnapshots.forEach((doc) => {
        productosFiltrados.push({id: doc.id, ...doc.data()})
       });
       setloding(false)
      }
      mostrarProductos(productosFiltrados)
    } catch (error) {
      console.log(error)
    }
   })()
  },[categoryId])

  return ( loding ? (
    <h2 className="louder">😪cargando😪</h2>
  ) : (
    <div className="container-listItem">
        <h2>{greeting}</h2>
        <h2>{children}</h2>
        <CarruselAuto></CarruselAuto>
        <div />
        <Titles>
          <h2>Recomendaciones</h2>
        </Titles>
        <div className="items-varios">
          <ContainerFlechas
          />           
          <ItemList
            className="container-items"
            aumentarCuenta={aumentarCuenta}
            productos={productos}
            position={position}
          > 
          </ItemList>
        </div>
      </div> )
)}


