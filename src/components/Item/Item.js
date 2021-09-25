import { useState } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

    const Item = ({producto})=>{
       return (
           <>
           <h2>{producto.title} - ${producto.price}</h2>
          </> 
       )
    } 

export default Item;