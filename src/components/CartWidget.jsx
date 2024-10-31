import { useContext } from "react";
import carrito from "../assets/shopping-cart-svgrepo-com.svg";
import { Cart } from "../context/CartProvider";
export const CartWidget = () => {
  
  const {cart} = useContext(Cart)

  console.log(cart)
  
  return (
    <div className="container-carrito">
      <img src={carrito} alt="" />
      <span>({cart.length})</span>
    </div>
  );
};
