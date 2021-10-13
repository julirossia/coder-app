import { useContext } from "react";
import CartContext from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({  producto, descripcion, image }) => {

  const {setCarrito} = useContext( CartContext )
  const addItem =(cantidad)=>{
    const ItemCantidad = {...producto,cantidad}
setCarrito(prev =>{

  return[...prev,ItemCantidad]
})
  }
  return (
    <section className="card-container">
    <div className="card">
      <p>descripcion:{producto.descripcion}</p>
      <img alt="imagen" src={producto.image}></img>
     
      <ItemCount stock={5} initial={1} onAdd={addItem}/> 
      </div>
    </section>
  );
};

export default ItemDetail;
