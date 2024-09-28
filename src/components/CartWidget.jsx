import carrito from "../assets/shopping-cart-svgrepo-com.svg";
export const CartWidget = ({cuenta}) => {
  
  return (
    <div className="container-carrito">
      <img src={carrito} alt="" />
      <span>({cuenta})</span>
    </div>
  );
};
