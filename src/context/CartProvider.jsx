import React, {createContext,useState} from "react";


export const Cart = createContext();


export const CartProvider = ({children}) => {
 //Estados para el carrtio
 const [cart , setCart] = useState([])
 const [quantity, setQuantity] = useState(0)
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
      })   
  }else {
    cartUpdate.push({...product, quantity: productQuantity})
  }
  setCart(cartUpdate)
  setQuantity(cartUpdate.length)
 }

 const isInCart = (productId) => {
    return cart.some(cartProduct => cartProduct.id === productId)
 }

return(
<Cart.Provider value={{cart, addCart, quantity,}}>
  {children}
</Cart.Provider>
);

};

export default CartProvider