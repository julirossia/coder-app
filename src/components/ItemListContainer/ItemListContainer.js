import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const productosServer = [
        {id:1, productName:'computer', price:150.000}, 
        {id:2, productName:'cell phone', price:70.000 }, 
        {id:3, productName:'headphone', price:4.000 }
    ] 


const ItemListContainer = ({titulo, subtitulo, edad, id}) =>{
   const [productos, setProductos] = useState([])
    useEffect(()=>{
        const time = new Promise((resolver)=>{
            setTimeout(()=>{

                resolver(productosServer)
            },2000)
        })
        time.then((resultado)=>{
setProductos(resultado)        })
    })

    if(productos.length > 0){
        return (
            <>
             <div className="test" id={id}>
           <p>{titulo}</p>
           <ItemCount stock={5} initial={1} onAdd={()=>{}}/> 

        </div>
            <ItemList productos={productos}/>
            </>
        )
    }else{
        return (
            <><p>Cargando...</p></>
        )
    }
   
}


export default ItemListContainer;