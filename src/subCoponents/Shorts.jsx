import React from 'react'
import "../scss/styles/shorts.scss"
import { ItemListContainer } from '../components/ItemListContainer'
const Shorts = () => {
  return (
    <main className='main-shorts'>
      <ItemListContainer>
         <h2 className='tituloShorts'>SHORTS</h2>
      </ItemListContainer>
    </main>
  )
}

export default Shorts