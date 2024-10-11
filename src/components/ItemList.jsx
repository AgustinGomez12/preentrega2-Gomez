import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = ({productosData,aumentarCuenta,position}) => {

return (    
    <div className='container-items' style={{potition:"relative",left: `${position.left}px`, right: `${position.right}px`}}>
        {productosData.map((producto) => {
            return(
                  <Item item = {producto} key={producto.id} aumentarCuenta={aumentarCuenta}/>   
            )
        })}
    </div> 
  )  
}

export default ItemList

