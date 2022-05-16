import { Link } from "react-router-dom";
import CartButton from "../cart/CartButton";
import { useCartContext } from "../context/CartContext";
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
          <Link to={`/ItemList/weomensCloth`}>Women's Clothing</Link>
          <Link to={"/ItemList/MensCloth"}>Men's Clothing</Link>
          <Link to={"/ItemList/Jewels"}>Jewels</Link>
          <Link to={"/ItemList/Electronics"}>Electronics</Link>
        </nav>
      </div>
      {hasCart && <CartButton totalInCart={totalInCart} />}
    </header>
  );
};

export default NavBar;
