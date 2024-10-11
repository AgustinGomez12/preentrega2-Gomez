import "../scss/styles/itemlistcontainer.scss";
import "../scss/styles/base.scss";
import ContainerFlechas from "./ContainerFlechas";
import Titles from "./Titles";
import CarruselAuto from "./CarruselAuto";
import { useEffect, useState } from "react";
import productosData from "../assets/MOCK_DATA (1).json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting, aumentarCuenta, children }) => {
  //Estado para mover el carrusel
  const [position, moverPotitionD] = useState({ left: 0 });
  //Estado para mover el carrusel


  //Promesa falsa
  const promise = new Promise((resolve, resjet) => {
    setTimeout(() => {
      if (productosData) {
        resolve("Se obtuvieron los datos correctamente");
      } else {
        resjet("Error");
      }
    },2000);
  });
  promise
    .then((resultado) => {
      setloding(true)
      console.log(resultado);
    })
    .catch((err) => {
      console.error(err);
    })
    

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      const dataBase = productosData;
      setData(dataBase);
    };
    const demoraInternet = setTimeout(fetchData, 2000);

    return () => clearTimeout(demoraInternet);
  }, []);
  //Promesa falsa

  //Estado para productos
  const [productos, mostrarProductos] = useState(null);
  //Estado para productos
  const { categoryId } = useParams();
  //Effecto usado para filtrar los productos
  useEffect(() => {
    let productosFiltrados = [];
    if (categoryId) {
      productosFiltrados = data.filter((f) => f.category === categoryId);
    } else {
      productosFiltrados = data;
    }
    productosFiltrados.length > 2 && mostrarProductos(productosFiltrados);
  }, [categoryId]);
  //Effecto usado para filtrar los productos

  return (
   
    <main>
      <div className="container-listItem">
        <h2>{greeting}</h2>
        <h2>{children}</h2>
        <CarruselAuto></CarruselAuto>
        <div />
        <Titles>
          <h2>Recomendaciones</h2>
        </Titles>
        <div className="items-varios">
          <ContainerFlechas
            position={position}
            moverPotitionD={moverPotitionD}
          />
          <ItemList
            position={position}
            className="container-items"
            data={productos || data}
            aumentarCuenta={aumentarCuenta}
          ></ItemList>
        </div>
      </div>
    </main>
  );
};
