import React, { createContext, useEffect, useState } from "react";

export const Cart = createContext();

export const CartProvider = ({ children }) => {
  //Estados para el carrtio
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  //Estados para el carrito

  //Funcion para añadir producto
  const addCart = (product, productQuantity) => {
    const cartConfirmed = isInCart(product.id);
    let cartUpdate = [...cart];
    if (cartConfirmed) {
      cartUpdate = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + productQuantity,
          };
        }
        return cartProduct;
      });
    } else {
      cartUpdate.push({ ...product, quantity: productQuantity });
    }
    setCart(cartUpdate);
    verQuantity(cartUpdate);
    verPrice(cartUpdate)
  };
   //Funcion para añadir producto

  //Funcion para verificar si el producto esta en el carrito
  const isInCart = (productId) => {
    return cart.some((cartProduct) => cartProduct.id === productId);
  };
  //Funcion para verificar si el producto esta en el carrito

  //Funcion para las cantidades del carrito
  const verQuantity = (updatedCart) => {
    const total = updatedCart.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    setTotalQuantity(total);
  };
  //Funcion para las cantidades del carrito

  const verPrice = (updatedCart) => {
    const total = updatedCart.reduce((acc, product) => acc + (product.precio * product.quantity), 0);
    setTotalPrice(total)
  }
  console.log(totalPrice)
  //Actualiza las cantidades totales en la inicialización
  useEffect(()=>{
  verQuantity(cart);
  verPrice(cart);
  },[cart])
  //Actualiza las cantidades totales en la inicialización

  console.log(totalPrice)
  return (
    <Cart.Provider
      value={{ cart, addCart,totalQuantity,setCart,totalPrice}}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartProvider;
