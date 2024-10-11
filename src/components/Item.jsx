import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item, aumentarCuenta }) => {
  const añadirAlcarrito = () => {
    aumentarCuenta((aumentar) => aumentar + 1);
  };

  return (
    <div className="item">
      <Link to={`/item/${item.id}`} className="link-detail">
        <h2>{item.titulo}</h2>
        <figure>
          <img src={item.imagenrepre} alt="" />
        </figure>
        <p>{item.precio}</p>
      </Link>
      <button onClick={añadirAlcarrito}>Añadir al carrito</button>
    </div>
  );
};

export default Item;
