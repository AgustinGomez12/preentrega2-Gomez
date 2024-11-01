import React, { useContext, useState } from "react";
import { Cart } from "../context/CartProvider";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  //Funcion para añadir al carrito con context
  const {addCart} = useContext(Cart)
  //Funcion para añadir al carrito con context

  //Estado para definir la cantidad que se requiere comprar
  const [count, setCount] = useState(1)
  //Estado para definir la cantidad que se requiere comprar


  //Estado para la vicibilidad del boton
  const [visibility,setVisibility] = useState(true)
  //Estado para la vicibilidad del boton


  //Funcion para añadir al carrito el determinado Item
  const handleCart = () => {
    addCart(producto, count)
    if(count){
      setVisibility(false)
    }
    
  }
  //Funcion para añadir al carrito el determinado Item

 

  return (
    <div className="productoDetallado">
      <img src={producto.image} alt="" />
      <h2>{producto.titulo}</h2>
      <p>$ {producto.precio}</p>
      <p>Stock disponible {producto.stock}</p>
      {visibility ?<ItemCount producto={producto} count={count} setCount={setCount}/> : <h3>Continua con la compra</h3>}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum amet
        ratione perferendis beatae eum consectetur, autem, doloremque
        perspiciatis exercitationem delectus ipsam corporis corrupti aliquid
        tempore praesentium molestias nobis tenetur eaque!
      </p>
      {visibility ? <button onClick={handleCart}>Añadir al carrito</button> : <Link to={"/Cart"}><button>Finalizar compra</button></Link>}
    </div>
  );
};

export default ItemDetail;
