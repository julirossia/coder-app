import Nav from "./NavBar"

const ItemListContainer = ({titulo, subtitulo, edad, id}) =>{
    return(
        <div className="test" id={id}>
           <p>{titulo}</p>
        </div>
    )
}


export default ItemListContainer;