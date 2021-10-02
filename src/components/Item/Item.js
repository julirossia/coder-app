    import { Link } from "react-router-dom";
    const Item = ({producto})=>{
       return (
           <>
          <Link to="/item/:id"><h2>{producto.productName} - ${producto.price}</h2></Link> 
          </> 
       )
    } 

export default Item;