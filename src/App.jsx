import { useState } from "react"
import { ItemListContainer } from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {
  const [cuenta,aumentarCuenta] = useState(0)
  return (
    <>
      <NavBar cuenta={cuenta}/>
      <ItemListContainer greeting = "INICIO" 
      aumentarCuenta={aumentarCuenta}/>
    </>
  )
}

export default App
