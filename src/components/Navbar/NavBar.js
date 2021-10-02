import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="brand" to="/">
          e-commerce
        </Link>
        <div className="links">
          <CartWidget />
          <Link to="/category/:id1">Categoría 1</Link>
          <Link to="/category/:id2">Categoría 2</Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
