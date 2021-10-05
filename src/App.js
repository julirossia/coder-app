import Nav from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./style.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { createContext } from "react/cjs/react.development";
import ItemContext from "./components/Context/ItemContext";
import { useState } from "react";

const App = ({}) => {
 const [carrito, setCarrito] = useState([])

  return (
    <ItemContext.Provider value={{carrito,setCarrito}}>
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
    </ItemContext.Provider>
  );
};

export default App;
