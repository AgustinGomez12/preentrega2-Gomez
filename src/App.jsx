import { ItemListContainer } from "./components/ItemListContainer"
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import Err404 from "./subCoponents/Err404"
import QuienesSomos from "./subCoponents/QuienesSomos"
import NavBar from "./components/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer"
import LogicaCarrusel from "./context/LogicaCarrusel"
import CartProvider from "./context/CartProvider"
import Cart from "./components/Cart"
import DatosDelUsuario from "./context/DatosUsuarioProvider"


function App() {
  
 
  return (
    <BrowserRouter>
    <DatosDelUsuario>
    <CartProvider>
    <LogicaCarrusel>
    <NavBar>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting = "INICIO"/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer greeting = "Productos" />}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Quienes Somos" element={<QuienesSomos/>}/>  
      <Route path="*" element={<Err404/>}/>
    </Routes>
    </NavBar>   
     </LogicaCarrusel>
     </CartProvider>
     </DatosDelUsuario>
    </BrowserRouter>
  )
}

export default App


//<NavBar cuenta={cuenta}/>
    //<ItemListContainer greeting = "INICIO" aumentarCuenta={aumentarCuenta}/>