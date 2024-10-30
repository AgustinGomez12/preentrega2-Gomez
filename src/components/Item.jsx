import { Link } from "react-router-dom";

const Item = ({ item }) => {
 

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
     <Link to={`/item/${item.id}`}><button >Detail</button></Link> 
    </div>
  );
};

export default Item;
