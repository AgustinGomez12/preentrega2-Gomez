import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import productosData from "../assets/MOCK_DATA (1).json";
import { useParams } from 'react-router-dom'
import "../scss/styles/detailitem.scss"
const ItemDetailContainer = () => {
  //Estado para setear productos
  const [producto, mostrarProducto] = useState(null)
  //Estado para setear productos
  
   //loding
   const [loding, setloding] = useState(false)
   //loding

  //params
  const { id } = useParams()
  //params

  //Effect para renderizar product
  useEffect(()=>{
    
    },[id])
   //Effect para renderizar product
  
  return (loding ? <h2 className='louder'>😪cargando😪</h2> : producto && <main className='main-detail'><ItemDetail producto={producto}/></main>)
    
  
}

export default ItemDetailContainer

/*//Promesa falsa
    const miPromesa = new Promise ((resolve,rejet)=>{
     setTimeout(()=>{
        if(productosData) {
          resolve(productosData)
        }else{
          rejet("no se pudieron obtener los productos")
        }
        
     }, 2000)
    })
    setloding(true)
    miPromesa.then((productosCompletos=>{
      setloding(false)   
      let productosFiltrados = []
      if(id){
        productosFiltrados = productosCompletos.find(f => f.id === Number(id))
      }else {
        productosFiltrados = productosCompletos
      }
      mostrarProducto(productosFiltrados)
    }))
    .catch(err => {
      console.error(err)
    }
    )
    //Promesa falsa*/ 