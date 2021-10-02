import Nav from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./style.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";

const App = ({}) => {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={ItemListContainer} />
        </Switch>
        {/* <ItemListContainer id="main-header" titulo="Bienvenidos" /> */}
        {/* <ItemDetailContainer /> */}
      </main>
    </BrowserRouter>
  );
};

export default App;
