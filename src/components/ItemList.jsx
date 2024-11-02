import Item from './Item'
const ItemList = ({productos,aumentarCuenta,position}) => {  

//Mapeado de mi item

return (   
   <div className='container-items' style={{potition:"relative",left: `${position.left}px`, right: `${position.right}px`}}>    
     {productos.map((producto)=>{
             return <Item item = {producto} key={producto.id} aumentarCuenta={aumentarCuenta}/>   
    
      }) }
     
    </div> 
    
)
}

export default ItemList
