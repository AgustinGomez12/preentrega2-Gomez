import { useState } from "react"
import { ItemListContainer } from "./components/ItemListContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Err404 from "./subCoponents/Err404"
import Remeras from "./subCoponents/Remeras"
import Pantalones from "./subCoponents/Pantalones"
import Shorts from "./subCoponents/Shorts"
import Registrarse from "./subCoponents/Registrarse"
import IniciarSesion from "./subCoponents/IniciarSesion"
import QuienesSomos from "./subCoponents/QuienesSomos"

function App() {
  const [cuenta,aumentarCuenta] = useState(0)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/preentrega1-Gomez" element={<ItemListContainer greeting = "INICIO" aumentarCuenta={aumentarCuenta} cuenta={cuenta}/>}/>
      <Route path="/*" element={<Err404/>}/>
      <Route path="/category/Remeras" element={<Remeras/>}/>
      <Route path="/category/Pantalones" element={<Pantalones/>}/>
      <Route path="/category/Shorts" element={<Shorts/>}/>
      <Route path="/category/Registrarse" element={<Registrarse/>}/>
      <Route path="/category/Iniciar sesiòn" element={<IniciarSesion/>}/>
      <Route path="/category/Quienes Somos" element={<QuienesSomos/>}/>
    </Routes>    
    </BrowserRouter>
  )
}

export default App


//<NavBar cuenta={cuenta}/>
    //<ItemListContainer greeting = "INICIO" aumentarCuenta={aumentarCuenta}/>