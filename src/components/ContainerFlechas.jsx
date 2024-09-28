import flechaIzq from '../assets/flecha-izq.svg'
import flechaDer from '../assets/flecha-der.svg'
const ContainerFlechas = ({children,position,moverPotitionD}) => {
 const moverDer = () => {
  moverPotitionD({
    left: position.left + 150 
  })
 } 
 const moverIzq = () => {
  moverPotitionD({
    left: position.left - 150
  })
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