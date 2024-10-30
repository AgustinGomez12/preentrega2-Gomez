import { useContext } from "react";
import carrito from "../assets/shopping-cart-svgrepo-com.svg";
import { Cart } from "../context/CartProvider";
export const CartWidget = () => {
  
  const {quantity} = useContext(Cart)
  
  return (
    <div className="container-carrito">
      <img src={carrito} alt="" />
      <span>({quantity})</span>
    </div>
  );
};
