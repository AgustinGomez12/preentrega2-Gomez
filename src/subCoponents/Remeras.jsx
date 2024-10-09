import React from 'react'
import NavBar from '../components/NavBar'
import '../scss/styles/remeras.scss'
import ContainerObjets from './ContainerObjets'
const Remeras = () => {
  return (
    
    <main className='main-Remeras'>
     <NavBar/>
     <div className='container-remeras'>
         <h2>Remeras</h2>
        <ContainerObjets>
           
        </ContainerObjets>
     </div>

    </main>
  )
}

export default Remeras