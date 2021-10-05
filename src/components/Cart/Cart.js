import { useContext } from "react/cjs/react.development";
import ItemContext from "../Context/ItemContext";

const Cart = () =>{

    const {carrito} = useContext(ItemContext)
    const listaTotales = []
    return(
        <>
        <p>Realizar Compra</p>
        <ul>
            {carrito.map((producto)=>{

                const total = producto.price * producto.cantidad
                listaTotales.push(total)
                return(
                    <li>{producto.productName} Precio unidad: ${producto.price} Cantidad:{producto.cantidad} Total:{total}</li>
                )
            })
        }
        </ul>
        <h3>Total:{listaTotales.reduce((prev, next)=> prev + next)}</h3>
        </>
    )
}

export default Cart;