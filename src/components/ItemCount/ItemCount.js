import { useState } from "react";

const ItemCount = ({stock, initial, onAdd, carrito}) =>{
    const [count, setCount] =  useState(initial)
    return(
        <section className="itemCount">
            <div className="quantity">
<button onClick={()=>{setCount(count - 1)}}>-</button> 
<span>contador: {count}</span>
<button onClick={()=>{setCount(count + 1)}}>+</button> 
</div>
<div className="confirm">
<button onClick={()=>onAdd(count)}>Confirmar compra</button>
</div>
        </section>
    )
}

export default ItemCount;