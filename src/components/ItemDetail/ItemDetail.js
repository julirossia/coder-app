import { useContext } from "react";
import ItemContext from "../Context/ItemContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({  producto, descripcion, image }) => {

  const {setCarrito} = useContext( ItemContext )
  const addItem =(cantidad)=>{
    const ItemCantidad = {...producto,cantidad}
setCarrito(prev =>{

  return[...prev,ItemCantidad]
})
  }
  return (
    <>
    <section className="card">
      <p>descripcion:{producto.descripcion}</p>
      <img src={producto.image}></img>
     
      <ItemCount stock={5} initial={1} onAdd={{addItem}}/> 
      </section>
    </>
  );
};

export default ItemDetail;
