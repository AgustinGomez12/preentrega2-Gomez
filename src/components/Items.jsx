import React, { useState } from 'react'
import remeraItemBasica from '../assets/remera-basica-2.jpg'
import shortNegro from '../assets/short-negro.jpg'
import calzaMasculina from '../assets/calza-masculina.jpg'
import remeraFemeninaB from '../assets/remera-basica-mujer.jpg'
export const Items = (nombre,precio) => {
 
  return (
    <>
    <div className="item">
         <figure>
                 <img src={remeraItemBasica} alt="" />
         </figure>
         <h3>
            {nombre="Remera basica"}
         </h3>
         <p>
            {precio="$10.000"}
         </p>
         <button>
              Añadir al carrito
         </button>
    </div>
    <div className="item">
         <figure>
                 <img src={shortNegro} alt="" />
         </figure>
         <h3>
            {nombre="Short de rugby"}
         </h3>
         <p>
            {precio="$17.600"}
         </p>
         <button> 
              Añadir al carrito
         </button>
    </div>
    <div className="item">
         <figure>
                 <img src={calzaMasculina} alt="" />
         </figure>
         <h3>
            {nombre="Calza masculina"}
         </h3>
         <p>
            {precio="$20.000"}
         </p>
         <button>
              Añadir al carrito
         </button>
    </div>
    <div className="item">
         <figure>
                 <img src={remeraFemeninaB} alt="" />
         </figure>
         <h3>
            {nombre="Remera de mujer basica"}
         </h3>
         <p>
            {precio="$10.000"}
         </p>
         <button>
              Añadir al carrito
         </button>
    </div>
  </>
  )
}
