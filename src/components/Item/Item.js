    import { Link } from "react-router-dom";
    const Item = ({producto})=>{
       return (
           <div className="product-card">
           <h3 className="item-list-detail">{producto.productName}</h3>
          <p className="item-price">${producto.price}</p>  
          <Link to={`/item/${producto.id}`}className="more"><span>ver mas</span></Link> 

          </div> 
       )
    } 

export default Item;