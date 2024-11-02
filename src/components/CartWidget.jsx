import { useContext } from "react";
import carrito from "../assets/shopping-cart-svgrepo-com.svg";
import { Cart } from "../context/CartProvider";
export const CartWidget = () => {
  
  //Context para mostrar las cantidades del carrito
  const {totalQuantity} = useContext(Cart)
  //Context para mostrar las cantidades del carrito

  
  return (
    <div className="container-carrito">
      <img src={carrito} alt="" />
      <span>({totalQuantity})</span>
    </div>
  );
};
