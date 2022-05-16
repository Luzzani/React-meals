import { Link } from "react-router-dom";
import "../navbar/NavBar.css";
import CartWidget from "./CartWidget";

const CartButton = (props) => {
  return (
    <div className="button-container">
      <button onClick={props.onShowHandler}>
        <Link to='./Cart'>
        <span className="titleCart">Your Cart</span>
        <span className="icon">
          <CartWidget />
        </span>
        <span className="badge">{props.totalInCart}</span>
        </Link>
      </button>
    </div>
  );
};

export default CartButton;
