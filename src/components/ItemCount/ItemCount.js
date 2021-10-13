import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, initial, onAdd, carrito}) =>{
    const [count, setCount] =  useState(initial)
    return(
        <section className="itemCount">
            <div className="quantity">
<button onClick={()=>{setCount(count - 1)}}>-</button> 
<span>contador: {count}</span>
<button onClick={()=>{setCount(count + 1)}}>+</button> 
</div>
<span className="confirm">
<Link to="/cart" onClick={()=>onAdd(count)}>Confirmar compra</Link>
</span>
        </section>
    )
}

export default ItemCount;