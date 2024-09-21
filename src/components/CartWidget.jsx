import React from 'react'
import  carrito  from "../assets/shopping-cart-svgrepo-com.svg";
import logoRegistro from "../assets/id-card-svgrepo-com.svg"
export const CartWidget = () => {
  return (
    <>
       <img src={carrito} alt="" />
       <span>(0)</span>
       <img src={logoRegistro} alt="" />
    </>
  )
}
