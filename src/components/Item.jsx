import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
 
 

 //Estado para manejar el stock
 const [noStock,setNoStock] = useState(false)
//Estado para manejar el stock

//Efeccto para renderizar el stock a true o false
 useEffect(()=> {
  if(item.stock === 0) {
    setNoStock(true)
  }else {
    setNoStock(false)
  }
 },[])
//Efeccto para renderizar el stock a true o false

   //Armado de mi item
  return (
    <div className="item">
      <div  className="link-detail">
        <h2>{item.titulo}</h2>
        <figure>
           <img src={item.image} alt="" />
        </figure>
        <p>$ {item.precio}</p>
        <p>Stock disponible {item.stock}</p>
      </div>
    {
      noStock ? <p>no hay stock del producto 😥</p> : <Link to={`/item/${item.id}`}><button >Mas info</button></Link> 
    } 
    </div>
  );
};

export default Item;
