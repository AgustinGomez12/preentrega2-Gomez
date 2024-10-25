import React from 'react'

const ItemDetail = ({ producto }) => {
  return (
    <div className='productoDetallado'>
      <img src={producto.image} alt="" />
      <h2>{producto.titulo}</h2>
      <p>{producto.precio}</p>
      <button>Comprar</button>
    </div>
  )
}

export default ItemDetail