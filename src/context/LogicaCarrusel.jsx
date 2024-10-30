import React, {createContext,useState} from "react";


export const movimientoCarrusel = createContext();


export const LogicaCarrusel = ({children}) => {
 //Estado para mover el carrusel
 const [position, moverPotitionD] = useState({ left: 0 });
 //Estado para mover el carrusel

return(
<movimientoCarrusel.Provider value={{position, moverPotitionD}}>
  {children}
</movimientoCarrusel.Provider>
);

};

export default LogicaCarrusel