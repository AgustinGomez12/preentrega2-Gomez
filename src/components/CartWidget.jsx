import React from "react";
import carrito from "../assets/shopping-cart-svgrepo-com.svg";
export const CartWidget = () => {
  return (
    <div className="container-carrito">
      <img src={carrito} alt="" />
      <span>(0)</span>
    </div>
  );
};
