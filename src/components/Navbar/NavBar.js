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
          <Link to="/categoria/1">Categoría 1</Link>
          <Link to="/categoria/2">Categoría 2</Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
