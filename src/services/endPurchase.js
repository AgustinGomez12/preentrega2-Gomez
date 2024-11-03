import { addDoc, collection, doc, or, runTransaction, serverTimestamp} from "firebase/firestore";
import { db } from "../Firebase/config";



const endPurChase = async (cart,formUser) => {
const productsToUpadateRefs = []
//Crea una matriz deReferencias a todos los productos en el carrito
for(const cartProcuct of cart) {
    const productRef = doc(db,"products", cartProcuct.id)
    productsToUpadateRefs.push({ ref: productRef, id: cartProcuct.id })
}

//Crea una referencia para la colección de pedidos
const orderCollectionRef = collection(db,"orders")

try {
    const order = await runTransaction(db, async (transaction) => {
      //Crea una matriz axilar para que las acciones sean Actualizadas
      const stocksUpdate = []

      //1.Compruebe el stock válido de cada producto en el carrito
      for(const productToUpdate of productsToUpadateRefs) {
        const { ref } = productToUpdate
        const product = await transaction.get(ref)
        if (!product.exists()){
            throw "Product does not exist!"
        }
        

        //Producto en el carrito en orden para saber la cantidad en el carrito
        const productInCart = cart.find(
            (cartElement) => cartElement.id === product.id
        )

        

        //Comprueba el stock resultante
        const resultStock = 
            product.data().stock - productInCart.quantity

        if(resultStock < 0) 
                throw `Product: ${
                    product.data().titulo
                }, does t hace enough stock. Stock: ${
                    product.data().stock
                }, quantity added to cart: ${productInCart.quantity}.`

                //Agregue el stock de resultados a la matriz auxiliar
        stocksUpdate.push({
                    productId: product.id,
                    stock: resultStock,
                })     
      }

      //2. Actualizar los stocks de los productos.
      for (const product of productsToUpadateRefs) {
        const { ref, id } = product
        const stockUpadated = stocksUpdate.find(
            (stock) => stock.productId === id
        )
        transaction.update(ref, {
            stock: stockUpadated.stock,
        })
      }

//Crear la orden  
      const order = {
        products: {...cart},
        user: {
           formUser
        },
        timestamp: serverTimestamp(),
      }
      addDoc(orderCollectionRef,order)
      return order
    })
//Crear la orden
    
} catch (error) {
    console.log(error)
}


}

export default endPurChase