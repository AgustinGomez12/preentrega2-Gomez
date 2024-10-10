import React from 'react'
import NavBar from '../components/NavBar'
import "../scss/styles/pantalones.scss"
import { ItemListContainer } from '../components/ItemListContainer'
const Pantalones = () => {
  return (
    <main className='main-pantalones'>
        <ItemListContainer>
          <h2 className='tituloPantalones'>PANTALONES</h2>
        </ItemListContainer>
    </main>
  )
}

export default Pantalones