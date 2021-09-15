import ItemCount from "./ItemCount";

const ItemListContainer = ({titulo, subtitulo, edad, id}) =>{
    return(
        <div className="test" id={id}>
           <p>{titulo}</p>
           <ItemCount stock={5} initial={1} onAdd={()=>{}}/> 

        </div>
    )
}


export default ItemListContainer;