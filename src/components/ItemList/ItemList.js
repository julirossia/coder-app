import Item from "../Item/Item";

const ItemList = ({productos}) => {
  return(
   <div >
     <div className="item-list">{productos.map((producto,id)=>{
return<div className="item-list-card"><Item key={id} producto={producto}/></div>
     })}</div>
     </div> 
  )
}
export default ItemList;