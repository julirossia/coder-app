import Nav from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./style.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";

const App = ({ }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <ItemListContainer id="main-header" titulo="Bienvenidos" />
        <ItemDetailContainer />
      </main>
    </>
  );
};

export default App;
