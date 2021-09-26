import Item from "../Item/Item";

const ItemList = ({productos}) => {
  return(
     <ul>{productos.map((producto,id)=>{
return<Item key={producto.id} producto={producto}/>
     })}</ul>
  )
}
export default ItemList;