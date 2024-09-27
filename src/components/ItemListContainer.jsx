import React from 'react'
import '../scss/styles/itemlistcontainer.scss'
import '../scss/styles/base.scss'
import remeraRugbyFemenino from '../assets/remera-rugby-f.jpg'
import remeraFutbol from '../assets/remera-futbol.jpg'
import remeraBasica from '../assets/remera-basica.jpg'
import calzaMasculina from '../assets/calza-masculina.jpg'
import remeraBasicaM from '../assets/remera-basica-mujer.jpg'
import shortMasculinoN from '../assets/short-negro.jpg'
import { Items } from './Items'
import ContainerFlechas from './ContainerFlechas'


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
          <ContainerFlechas/>
             <Items>
              <h3>
                 Calza masculina
              </h3>
              <figure>
                <img src={calzaMasculina} alt="" />
              </figure>
              <button>
                Añadir al carrito
              </button>
             </Items>

             <Items>
              <h3>
                 Remera basica Femenina
              </h3>
              <figure>
                <img src={remeraBasicaM} alt="" />
              </figure>
              <button>
                Añadir al carrito
              </button>
             </Items>

             <Items>
              <h3>
                 Remera basica Masculina
              </h3>
              <figure>
                <img src={remeraBasica} alt="" />
              </figure>
              <button>
                Añadir al carrito
              </button>
             </Items>

               <Items>
              <h3>
                 Short masculino negro
              </h3>
              <figure>
                <img src={shortMasculinoN} alt="" />
              </figure>
              <button>
                Añadir al carrito
              </button>
             </Items>     
        </div>

       </div>              
    </>
  )
}
