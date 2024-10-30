import Item from './Item'
//Promesa false
const ItemList = ({productos,aumentarCuenta,position}) => {  

return (   
   <div className='container-items' style={{potition:"relative",left: `${position.left}px`, right: `${position.right}px`}}>    
     {productos.map((producto)=>{
             return <Item item = {producto} key={producto.id} aumentarCuenta={aumentarCuenta}/>   
    
      }) }
     
    </div> 
    
)
}

export default ItemList
