import React from 'react'
import imgenLogo from '../assets/logo-fowards.png'
import '../scss/styles/base.scss'
import '../scss/styles/navbar.scss'
import { CartWidget } from './CartWidget'


const NavBar = () => {
  return (
    <>
       <div className='contenedor-navbar'>
          <div className='container-logo'>
              <img src={imgenLogo} alt="" />
              <h1>Fowards</h1>
          </div>
         <div className='container-carritoYlog'>
               <CartWidget/>          
         </div>
          <div className='container-links'>
              <ul>
                 <li>
                    <a href="">
                      Inicio
                    </a>
                 </li>
                 <li>
                    <a href="">
                      Remeras
                    </a>
                 </li>
                 <li>
                    <a href="">
                    Pantalones
                </a>
                 </li>
                 <li>
                    <a href="">
                    Shorts
                    </a>
                 </li>
                 <li>
                    <a href="">
                    Registrarse
                    </a>
                  </li>
                 <li>
                    <a href="">
                    iniciar sesión
                    </a>
                 </li>
                 <li>
                    <a href="">
                    ¿Quienes somos?
                    </a>
                 </li>
              </ul>
          </div>
        </div>
    </>
  )
}

export default NavBar