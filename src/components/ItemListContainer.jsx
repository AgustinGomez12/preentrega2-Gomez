import React from 'react'
import '../scss/styles/itemlistcontainer.scss'
import '../scss/styles/base.scss'
import remeraRugbyFemenino from '../assets/remera-rugby-f.jpg'
import remeraFutbol from '../assets/remera-futbol.jpg'
import remeraBasica from '../assets/remera-basica.jpg'
import { Items } from './Items'


export const ItemListContainer = ({greeting}) => {
  return (
    <>
       <div className='container-listItem'>
            <h2>
                {greeting}
            </h2>

            <div className='container-carruselAuto'>
                <div className='carrusel-auto'>
                    <img src={remeraRugbyFemenino} alt="" />
                    <img src={remeraFutbol} alt="" />
                    <img src={remeraBasica} alt="" />
                </div>
           </div>
           <h2 className='subtitulo-recomendaciones'>
               Recomendaciones
           </h2>
        <div className='items-varios'>
              <Items></Items>
        </div>
       </div>      
        
    </>
  )
}
