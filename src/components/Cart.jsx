import React, { useContext, useState } from "react";
import "../scss/styles/cart.scss";
import { Cart as CartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import Modal from "./Modal";

const Cart = () => {
  //Contextos para correcto funcionamiento del cart
  const { cart, setCart, totalPrice } = useContext(CartContext);
  //Contextos para correcto funcionamiento del cart

  //Funcion para eliminar item del cart
  const eliminarItem = (id) => {
    const nuevosItems = cart.filter((item) => item.id !== id);
    setCart(nuevosItems);
  };
  //Funcion para eliminar item del cart

  //Estado para ver el modal
  const [modal, setModal] = useState(false);
  //Estado para ver el modal

  //Funcion para invertir estado del modal
  const appearModal = () => {
    setModal(!modal);
  };
  //Funcion para invertir estado del modal

  return (
    <main className="mainCart">
      <h3>Carrito</h3>

      {cart.length ? (
        cart.map((cartItem) => {
          return (
            <CartItem
              eliminarItem={eliminarItem}
              item={cartItem}
              key={cartItem.id}
            />
          );
        })
      ) : (
        <h2
          className="cartVacio"
          style={{
            display: "flex",
            alignItems: "end",
            fontSize: 50,
            fontFamily: "Anton",
            color: "white",
            height: 500,
          }}
        >
          No hay productos en el carrito 😿 Miuw miuw miuw 😿
        </h2>
      )}

      {cart.length ? (
        <div className="totalDinero">
          <h2>El total es : {totalPrice}</h2>{" "}
          <button onClick={appearModal}>Continuar compra</button>
        </div>
      ) : (
        <div></div>
      )}

      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          cart={cart}
          totalPrice={totalPrice}
        />
      )}
    </main>
  );
};

export default Cart;
