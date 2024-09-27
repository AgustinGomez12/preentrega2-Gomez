import React from 'react'
import flechaIzq from '../assets/flecha-izq.svg'
import flechaDer from '../assets/flecha-der.svg'
const ContainerFlechas = ({children}) => {
  return (
    <div className='container-flechas'>
        {children}
        <figure className='flecha-der'>
            <img src={flechaDer} alt="" />
        </figure>
        <figure className='flecha-izq'>
            <img src={flechaIzq} alt="" />
        </figure>
    </div>
  )
}

export default ContainerFlechas