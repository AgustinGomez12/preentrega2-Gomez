import { ItemListContainer } from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting = "INICIO" ></ItemListContainer>
    </>
  )
}

export default App
