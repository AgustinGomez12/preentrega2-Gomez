import React from 'react'
import '../scss/styles/remeras.scss'
import { ItemListContainer } from '../components/ItemListContainer'




const Remeras = ({aumentarCuenta},{cuenta}) => {
  return (
    
    <main className='main-Remeras'>
     <ItemListContainer aumentarCuenta={aumentarCuenta} cuenta={cuenta}>
      <h2 className='tituloRemeras'>Remeras</h2>
     </ItemListContainer>
    </main>
  )
}

export default Remeras