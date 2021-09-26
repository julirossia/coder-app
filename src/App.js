
import Nav from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './style.scss';

const App = () =>{
    return(
      <>
      <header>
        <Nav/>
        </header>
        <main> 
        <ItemListContainer id="main-header" titulo="Bienvenidos"/>
        </main>
       </>
    )
}

export default App;