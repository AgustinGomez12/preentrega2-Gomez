import flechaIzq from '../assets/flecha-izq.svg'
import flechaDer from '../assets/flecha-der.svg'
const ContainerFlechas = ({children,position,moverPotitionD}) => {
 const moverDer = () => {
    if(position.left >= 3800){

    }else{
      moverPotitionD({
        left: position.left + 300
      })
    }
    
 }

 const moverIzq = () => {
    if(position.left <= -3800){

    }else{
      moverPotitionD({
        left: position.left -300
      })
    }
}
  return (
    <div className='container-flechas'>
        {children}
        <figure className='flecha-der'>
            <img onClick={moverDer} src={flechaDer} alt="" />
        </figure>
        <figure className='flecha-izq'>
            <img onClick={moverIzq} src={flechaIzq} alt="" />
        </figure>
    </div>
  )
}

export default ContainerFlechas