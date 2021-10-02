import { Link } from "react-router-dom";

const CartWidget =() =>{
    return(
<Link to="/cart" className="material-icons-outlined shopping-cart">
    <a>
shopping_cart
</a>
</Link>
    )
}

export default CartWidget;