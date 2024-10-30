import { useState } from "react"
import { ItemListContainer } from "./components/ItemListContainer"
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import Err404 from "./subCoponents/Err404"
import Registrarse from "./subCoponents/Registrarse"
import IniciarSesion from "./subCoponents/IniciarSesion"
import QuienesSomos from "./subCoponents/QuienesSomos"
import NavBar from "./components/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer"
import LogicaCarrusel from "./context/LogicaCarrusel"


function App() {
  const [cuenta,aumentarCuenta] = useState(0)
 
  return (
    <BrowserRouter>
    <LogicaCarrusel>
    <NavBar cuenta={cuenta}>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting = "INICIO" aumentarCuenta={aumentarCuenta} cuenta={cuenta}/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer greeting = "Productos" aumentarCuenta={aumentarCuenta} cuenta={cuenta}/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/Registrarse" element={<Registrarse/>}/>
      <Route path="/Iniciar sesiòn" element={<IniciarSesion/>}/>
      <Route path="/Quienes Somos" element={<QuienesSomos/>}/>  
      <Route path="*" element={<Err404/>}/>
    </Routes>
    </NavBar>   
     </LogicaCarrusel>
    </BrowserRouter>
  )
}

export default App


//<NavBar cuenta={cuenta}/>
    //<ItemListContainer greeting = "INICIO" aumentarCuenta={aumentarCuenta}/>