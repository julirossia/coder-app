import Item from "../Item/Item";

const ItemList = ({productos}) => {
  return(
     <ul>{productos.map((producto,id)=>{
return<Item key={id} producto={producto}/>
     })}</ul>
  )
}
export default ItemList;