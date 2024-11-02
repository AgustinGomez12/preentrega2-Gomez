import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import "../scss/styles/detailitem.scss"
import { db } from '../Firebase/config';
import { doc,getDoc } from 'firebase/firestore';
const ItemDetailContainer = () => {
  //Estado para setear productos
  const [producto, mostrarProducto] = useState([])
  //Estado para setear productos
  
   //loding
   const [loding, setloding] = useState(false)
   //loding

   // Estado para manejar errores 
   const [error, setError] = useState(null);
   // Estado para manejar errores 

  //params
  const { id } = useParams()
  //params

  //Effect para renderizar product
  useEffect(()=>{
    ;(async () => {
      setloding(true)
     try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()) {
        mostrarProducto({...docSnap.data(), id})
      }else {
        setError("No se encotro el producto")
      }
      setloding(false)
     } catch (error) {
      setError("No se encotro el producto")
     }
     
    })
    ()
    },[id])
   //Effect para renderizar product
  
  return (error ? <h2 className='errorProduct'>💀Error producto no encontado💀</h2> : loding ? <h2 className='louder'>😪cargando😪</h2> : producto && <main className='main-detail'><ItemDetail producto={producto}/></main>  ) 
  
 
  
}

export default ItemDetailContainer

