import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import productos from "../assets/MOCK_DATA (1).json"
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
  
  
  return (
    <div>
      <ItemDetail/>
    </div>
  )
}

export default ItemDetailContainer