import React, { useContext } from 'react'
import '../scss/styles/cart.scss'
import { Cart as CartContext } from '../context/CartProvider'
import CartItem from './CartItem'
const Cart = () => {
  const {cart,setCart,totalPrice} = useContext(CartContext)
  
  const eliminarItem = (id) => {
    const nuevosItems = cart.filter(item => item.id !== id)
    setCart(nuevosItems)
  }
 
  

  return (
    <main className='mainCart'>
        <h3>Carrito</h3>
         
        {
          cart.length ? cart.map(cartItem => {
            return <CartItem eliminarItem={eliminarItem} item = {cartItem} key={cartItem.id}/>
        })
        :
        <h2 className='cartVacio' style={{
          display:"flex",
          alignItems:"end",
          fontSize: 50,
          fontFamily: "Anton",
          color: "white",
          height: 500,
        }}>
          No hay productos en el carrito
         😿 Miuw miuw miuw 😿
        </h2>
        }
      
      {
        cart.length ? <div className='totalDinero'><h2>El total es : {totalPrice}</h2> <button>Continuar compra</button></div> : <div></div>
      }
        
    </main>
  )
}

export default Cart