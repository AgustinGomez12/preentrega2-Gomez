import "../scss/styles/itemlistcontainer.scss";
import "../scss/styles/base.scss";
import remeraBasica from "../assets/remera-basica.jpg";
import calzaMasculina from "../assets/calza-masculina.jpg";
import remeraBasicaM from "../assets/remera-basica-mujer.jpg";
import shortMasculinoN from "../assets/short-negro.jpg";
import { Items } from "./Items";
import ContainerFlechas from "./ContainerFlechas";
import Titles from "./Titles";
import CarruselAuto from "./CarruselAuto";
import { useState } from "react";

export const ItemListContainer = ({ greeting, aumentarCuenta }) => {
  const añadirCarrito = () => {
    aumentarCuenta((aumentar) => aumentar + 1);
  };

  const [position, moverPotitionD] = useState({ left: 0 });
  
  return (
    <main>
      <div className="container-listItem">
        <h2>{greeting}</h2>
        <CarruselAuto></CarruselAuto>
        <div />
        <Titles>
          <h2>Recomendaciones</h2>
        </Titles>
        <div className="items-varios">
          <ContainerFlechas position={position} moverPotitionD={moverPotitionD}/>
          <div
            style={{
              position: "relative",
              left: `${position.left}px`,
              right: `${position.right}px`,
            }}
            className="container-items"
          >
            <Items>
              <h3>Calza masculina</h3>
              <figure>
                <img src={calzaMasculina} alt="" />
              </figure>
              <button onClick={añadirCarrito}>Añadir al carrito</button>
            </Items>

            <Items>
              <h3>Remera basica Femenina</h3>
              <figure>
                <img src={remeraBasicaM} alt="" />
              </figure>
              <button onClick={añadirCarrito}>Añadir al carrito</button>
            </Items>

            <Items>
              <h3>Remera basica Masculina</h3>
              <figure>
                <img src={remeraBasica} alt="" />
              </figure>
              <button onClick={añadirCarrito}>Añadir al carrito</button>
            </Items>

            <Items>
              <h3>Short masculino negro</h3>
              <figure>
                <img src={shortMasculinoN} alt="" />
              </figure>
              <button onClick={añadirCarrito}>Añadir al carrito</button>
            </Items>
          </div>
        </div>
      </div>
    </main>
  );
};
