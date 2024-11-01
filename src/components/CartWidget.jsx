import { useContext } from "react";
import carrito from "../assets/shopping-cart-svgrepo-com.svg";
import { Cart } from "../context/CartProvider";
export const CartWidget = () => {
  
  const {totalQuantity} = useContext(Cart)

  
  return (
    <div className="container-carrito">
      <img src={carrito} alt="" />
      <span>({totalQuantity})</span>
    </div>
  );
};
