import "../scss/styles/itemlistcontainer.scss";
import "../scss/styles/base.scss";
import ContainerFlechas from "./ContainerFlechas";
import Titles from "./Titles";
import CarruselAuto from "./CarruselAuto";
import { useEffect, useState } from "react";
import productosData from "../assets/MOCK_DATA (1).json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting, aumentarCuenta, children }) => {
  //Estado para mover el carrusel
  const [position, moverPotitionD] = useState({ left: 0 });
  //Estado para mover el carrusel

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
  //Promesa falsa
  const miPromesa = new Promise ((resolve,rejet)=>{
   setTimeout(()=>{
      if(productosData) {
        resolve(productosData)
      }else{
        rejet("no se pudieron obtener los productos")
      }
      
   }, 2000)
  })
  setloding(true)
  miPromesa.then((productosCompletos=>{
    setloding(false)
    let productosFiltrados = []
    if(categoryId){
      productosFiltrados = productosCompletos.filter(f => f.category === categoryId)
    }else {
      productosFiltrados = productosCompletos
    }
    mostrarProductos(productosFiltrados)
  }))
  .catch(err => {
    console.error(err)
  }
  )
  //Promesa falsa
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
            position={position}
            moverPotitionD={moverPotitionD}
          />           
          <ItemList
            position={position}
            className="container-items"
            aumentarCuenta={aumentarCuenta}
            productos={productos}
          > 
          </ItemList>
        </div>
      </div> )
)}
