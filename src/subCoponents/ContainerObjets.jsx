import React from 'react'
import "../scss/styles/containerobjets.scss"
const ContainerObjets = ({children}) => {
  return (
    <div className='ContainerObjets'>
        {children}
    </div>
  )
}

export default ContainerObjets