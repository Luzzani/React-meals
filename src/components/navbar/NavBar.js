import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import { useCartContext } from "../../context/CartContext";
import { AiOutlineMenu } from "react-icons/ai";

import CartButton from "../cart/CartButton";
import "./NavBar.css";

const NavBar = () => {
  const { cart } = useCartContext();

  const [showLinks, setShowLinks] = useState(false);

  const onShowHandle = () => {
    setShowLinks(() => !showLinks);
  };

  const hasCart = cart.length > 0;

  // Number of items in the shopping cart
  let totalInCart = 0;
  cart.map((item) => (totalInCart += item.quantity));

  return (
    <div className="navbar">
      <div className="leftSide">
        <div className="logo">
          <Link to="/">PlatiniumEnd</Link>
        </div>
      </div>
      <div className="rightSide">
        <div className="link" id={showLinks ? "hidden" : ""}>
          <NavLink activeClassName="active" to={`/ItemList/womensCloth`}>
            Women's Clothing
          </NavLink>
          <NavLink activeClassName="active" to={"/ItemList/MensCloth"}>
            Men's Clothing
          </NavLink>
          <NavLink activeClassName="active" to={"/ItemList/Jewels"}>
            Jewels
          </NavLink>
          <NavLink activeClassName="active" to={"/ItemList/Electronics"}>
            Electronics
          </NavLink>
        </div>
        {hasCart && <CartButton totalInCart={totalInCart} />}
        <button className="btnToggle" onClick={onShowHandle}>
          <AiOutlineMenu />
        </button>
      </div>
    </div>
  );
};

export default NavBar;

/*
import { NavLink, Link } from "react-router-dom";
import CartButton from "../cart/CartButton";
import { useCartContext } from "../../context/CartContext";
import "./NavBar.css";

const NavBar = () => {
  const { cart } = useCartContext();

  const hasCart = cart.length > 0;

  // Number of items in the shopping cart
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

*/
