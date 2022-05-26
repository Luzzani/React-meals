import { NavLink, Link } from "react-router-dom";
import CartButton from "../cart/CartButton";
import { useCartContext } from "../../context/CartContext";
import "./NavBar.css";

const NavBar = () => {
  const { cart } = useCartContext();

  const hasCart = cart.length > 0;
  
  let totalInCart = 0;
  cart.map(item => totalInCart += item.quantity)

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">PlatiniumEnd</Link>
      </div>
      <div>
        <nav className="navbar">
          <NavLink activeClassName='active' to={`/ItemList/womensCloth`}>Women's Clothing</NavLink>
          <NavLink activeClassName='active' to={"/ItemList/MensCloth"}>Men's Clothing</NavLink>
          <NavLink activeClassName='active' to={"/ItemList/Jewels"}>Jewels</NavLink>
          <NavLink activeClassName='active' to={"/ItemList/Electronics"}>Electronics</NavLink>
        </nav>
      </div>
      {hasCart && <CartButton totalInCart={totalInCart} />}
    </header>
  );
};

export default NavBar;
