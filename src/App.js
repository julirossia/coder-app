import Nav from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./style.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContext from "./components/Context/CartContext";
import { useState } from "react";

const App = ({}) => {
 const [carrito, setCarrito] = useState([])

  return (
    <CartContext.Provider value={{carrito,setCarrito}}>
    <BrowserRouter>
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path="/categoria/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />

          <Route path="/cart" component={Cart} />

          <Route path="/" component={ItemListContainer} />
        </Switch>
      </main>
      </>
    </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
