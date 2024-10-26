import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    <div className="productoDetallado">
      <img src={producto.image} alt="" />
      <h2>{producto.titulo}</h2>
      <p>$ {producto.precio}</p>
      <p>Stock disponible {producto.stock}</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum amet
        ratione perferendis beatae eum consectetur, autem, doloremque
        perspiciatis exercitationem delectus ipsam corporis corrupti aliquid
        tempore praesentium molestias nobis tenetur eaque!
      </p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ItemDetail;
