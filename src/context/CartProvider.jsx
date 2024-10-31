import React, {createContext,useState} from "react";


export const Cart = createContext();


export const CartProvider = ({children}) => {
 //Estados para el carrtio
 const [cart , setCart] = useState([])
 //Estados para el carrito

 const addCart = (product,productQuantity) => {
  const cartConfirmed = isInCart(product.id)
  let cartUpdate = [...cart]
  if (cartConfirmed) {
      cartUpdate = cart.map( cartProduct => {
        if(cartProduct.id === product.id){
           return{
             ...cartProduct,
             quantity: cartProduct.quantity + productQuantity
           }
        }
        return cartProduct
      })   
  }else {
    cartUpdate.push({...product, quantity: productQuantity})
  }
  setCart(cartUpdate)
  
 }

 const isInCart = (productId) => {
    return cart.some(cartProduct => cartProduct.id === productId)
 }

return(
<Cart.Provider value={{cart, addCart, setCart}}>
  {children}
</Cart.Provider>
);

};

export default CartProvider