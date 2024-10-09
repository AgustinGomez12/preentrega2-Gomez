import React from 'react'
import NavBar from '../components/NavBar'
import "../scss/styles/pantalones.scss"
import ContainerObjets from './ContainerObjets'
const Pantalones = () => {
  return (
    <main className='main-pantalones'>
        <NavBar/>
        <div className='container-pantalones'>
             <h2>
                Pantalones
             </h2>
             <ContainerObjets>
                
             </ContainerObjets>
        </div>
    </main>
  )
}

export default Pantalones