import { useContext } from "react/cjs/react.development";
import CartContext from "../Context/CartContext";

const Cart = () =>{

    const {carrito} = useContext(CartContext)
    const listaTotales = []
    return(
        <section className="buy-card-container">
        <div className="buy-card">
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
{/*         <h3>Total:{listaTotales.reduce((prev, next)=> prev + next)}</h3>
 */}        </div>
 </section>
    )
}

export default Cart;