    import { Link } from "react-router-dom";
    const Item = ({producto})=>{
       return (
           <>
          <Link to={`/item/${producto.id}`}><h2>{producto.productName} - ${producto.price}</h2>ver mas</Link> 

          </> 
       )
    } 

export default Item;