import CartWidget from "../cart/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#home">RM</a>
      </div>
      <div>
        <nav className="navbar">
          <a href="#Cloth">Clothing</a>
          <a href="#Jewels">Jewels</a>
          <a href="#Tech">Technology</a>
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
