
import Nav from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
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