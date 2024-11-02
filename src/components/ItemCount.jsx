import React from 'react'


const ItemCount = ({producto, count, setCount}) => { 
  
  
  //Funcion para añadir una cantidad del producto
  const añadir = () => {
   if(count < producto.stock) {
    setCount(count => count + 1)
   }
   
  }
 //Funcion para añadir una cantidad del producto

 //Funcion para restar una cantidad al producto
  const restar = () => {
    if(count === 1){

    }else{
    setCount(count => count - 1)
}
  }

 //Funcion para restar una cantidad al producto

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