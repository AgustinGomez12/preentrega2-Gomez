import React from 'react'

const Item = ({item,aumentarCuenta}) => {
    const añadirAlcarrito = () => {
        aumentarCuenta(aumentar => aumentar + 1)
    }
  return (
    <div className='item'>
          <h2>{item.titulo}</h2>
          <figure>
          <img src={item.imagenrepre} alt="" />
          </figure>
          <p>
            {item.precio}
          </p>
          <button onClick={añadirAlcarrito}>
            Añadir al carrito
          </button>
    </div>
  )
}

export default Item