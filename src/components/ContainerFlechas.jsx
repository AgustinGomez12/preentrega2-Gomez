import flechaIzq from "../assets/flecha-izq.svg";
import flechaDer from "../assets/flecha-der.svg";


const ContainerFlechas = ({children,position,moverPotitionD,categoryId,}) => {
  
  const refrescarCarrusel = () => {
    //Reinicio del carrusel
   moverPotitionD({left: position.left === 0})
   //Reinicio del carrusel
  }
  
  //Mover carrusel derecha
  const moverDer = () => {
    if(categoryId === undefined) {
      
    if(position.left >= 3800){

    }else{
      
      moverPotitionD({
        left: position.left + 300

      }) 
    };
  }

  if(categoryId === "Remeras"){
    if(position.left >= 1000){

    }else{
     moverPotitionD({
       left: position.left + 300
     })
    }
 };

 if(categoryId === "Pantalones"||"Shorts"){
  if(position.left >= 600){

  }else{
    moverPotitionD({
      left: position.left +300
    
    })  
    console.log(position)
  }
};
    
};
  //Mover carrusel derecha 
  

  //Mover carrusel izquierda
  const moverIzq = () => {
    if(categoryId === undefined){
    if(position.left <= -3800){

    }else{
      moverPotitionD({
        left: position.left -300
      })
    }
  }

  if(categoryId === "Remeras"){
    if(position.left <= -1000){

    }else{
      moverPotitionD({
        left: position.left -300
      })
    }
  }

 if(categoryId === "Pantalones"||"Shorts"){
    if(position.left <= -600){

    }else{
      moverPotitionD({
        left: position.left -300
      
      })  
      console.log(position)
    }
  };

  };
  //Mover carrusel izquierda
  
  

  return (
    <div className="container-flechas">
      {children}
      <figure className="flecha-der">
        <img onClick={moverDer} src={flechaDer} alt="" />
      </figure>
      <figure className="flecha-izq">
        <img onClick={moverIzq} src={flechaIzq} alt="" />
      </figure>
    </div>
  );
};

export default ContainerFlechas;
