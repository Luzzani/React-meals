import { Link } from "react-router-dom";
import CartWidget from "../cart/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">RM</Link>
      </div>
      <div>
        <nav className="navbar">
          <Link to={'/ItemList'} href="#Cloth">Clothing</Link>
          <Link to={'/ItemList'} href="#Jewels">Jewels</Link>
          <Link to={'/ItemList'} href="#Tech">Technology</Link>
        </nav>
      </div>
      <div className="button-container">
        <button className="button">Login</button>
        <button>
          <span className="titleCart">Your Cart</span>
          <span className="icon">
            <CartWidget />
          </span>
          <span className="badge">0</span>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
