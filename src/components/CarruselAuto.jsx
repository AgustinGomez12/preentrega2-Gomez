import React from "react";
import TarjetsCarrusel from "./TarjetsCarrusel";
import remeraFootball from "../assets/remera-futbol.jpg";
import remeraRugbyF from "../assets/remera-rugby-f.jpg";
import remeraBasica2 from "../assets/remera-basica-2.jpg"
const CarruselAuto = ({ children }) => {
  return (
    <div className="container-carruselAuto">
      {children}
      <TarjetsCarrusel>
      <figure>
          <img src={remeraRugbyF} alt="" />
        </figure>
        <div className="container-textButton">
          <p>Ropa para jugar al rugby de exelente calidad y precio.🔥</p>
          <button>
            Mas info
          </button>
        </div>
      </TarjetsCarrusel>
      <TarjetsCarrusel>
        <figure>
          <img src={remeraFootball} alt="" />
        </figure>
        <div className="container-textButton">
          <p>Lo mejor en football, camisetas y pantalones al mejor precio. 😉</p>
          <button>
            Mas info
          </button>
        </div>
      </TarjetsCarrusel>
      <TarjetsCarrusel>
      <figure>
          <img src={remeraBasica2} alt="" />
        </figure>
        <div className="container-textButton">
          <p>Tenemos ropa para tu dia a dia. 😁</p>
          <button>
            Mas info
          </button>
        </div>
      </TarjetsCarrusel>
    </div>
  );
};

export default CarruselAuto;
