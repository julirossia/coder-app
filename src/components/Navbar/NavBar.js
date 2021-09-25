import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Nav = () =>{
    return(
        <>
        <nav className="navbar">
           <p>e-commerce</p> 
            <div className="links">
                <CartWidget/>
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Tienda</a>

            </div>

    </nav>
    </>
    )
}

export default Nav;