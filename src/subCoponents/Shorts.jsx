import React from 'react'
import NavBar from '../components/NavBar'
import "../scss/styles/shorts.scss"
import ContainerObjets from './ContainerObjets'
const Shorts = () => {
  return (
    <main className='main-shorts'>
      <NavBar/>
      <div className='container-shorts'>
         <h2>
            Shorts
         </h2>
         <ContainerObjets>
            
         </ContainerObjets>
      </div>
    </main>
  )
}

export default Shorts