import "../scss/styles/itemlistcontainer.scss";
import "../scss/styles/base.scss";
import ContainerFlechas from "./ContainerFlechas";
import Titles from "./Titles";
import CarruselAuto from "./CarruselAuto";
import {useState } from "react";
import productosData from "../assets/MOCK_DATA (1).json";
import ItemList from "./ItemList";
import NavBar from "./NavBar";

export const ItemListContainer = ({ greeting, aumentarCuenta,cuenta,children }) => {
  //Estado para mover el carrusel
  const [position, moverPotitionD] = useState({ left: 0 });
  //Estado para mover el carrusel
   

  return (
    <main>   
      <NavBar cuenta={cuenta}/>
      <div className="container-listItem">
        <h2>{greeting}</h2>
        <h2>{children}</h2> 
        <CarruselAuto></CarruselAuto>
        <div/>
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
            productosData={productosData}
            aumentarCuenta= {aumentarCuenta}
          >
          </ItemList>
        </div>
      </div>
    </main>
  );
};
