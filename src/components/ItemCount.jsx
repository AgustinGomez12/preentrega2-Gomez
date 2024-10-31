import { count } from 'firebase/firestore'
import React, { useContext, useState } from 'react'


const ItemCount = ({producto, count, setCount}) => { 
  
  
  
  const añadir = () => {
   if(count < producto.stock) {
    setCount(count => count + 1)
   }
   
  }

  const restar = () => {
    if(count === 1){

    }else{
    setCount(count => count - 1)
}
  }


  return (
    <div className='container-botonesCuenta'>
        <button onClick={restar}>
            -
        </button>

        <span>
            {count}
        </span>

        <button onClick={añadir} >
             +
        </button>
    </div>
  )
}

export default ItemCount