import React from "react";
import { useState } from "react";



const CartItem = ({ item,eliminarItem }) => {  
  

  

  return (
    <div className="itemDentroDelCart">
      <div>
        <img src={item.image} />
        <h2>{item.titulo}</h2>
      </div>

      <p>Precio:{item.precio}</p>
      <p>
        Descripcion: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatem quos ipsam possimus, dolorum ad necessitatibus aliquam ut.
      </p>
      <p>Cantidad:{item.quantity}</p>
      <button onClick={()=>eliminarItem(item.id) }>Eliminar producto</button>
    </div>
  );
};

export default CartItem;
