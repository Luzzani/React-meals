import CartIcon from "./cart/cartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#home">RM</a>
      </div>
      <div>
        <nav className="navbar">
          <a href="#meat">Meat</a>
          <a href="#chiken">Chiken</a>
          <a href="#vegan">Vegan</a>
        </nav>
      </div>
      <div className="button-container">
        <button className="button">Login</button>
        <button className="button">
          <span>Your Cart</span>
          <span className="icon">
            <CartIcon />
          </span>
          <span className="badge">0</span>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
