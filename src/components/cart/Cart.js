import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

import Modal from "../UI/Modal";
import ItemCart from "./ItemCart";

import classes from "./Cart.module.css";
import Button from "../UI/Button";

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);

  const hasCart = cart.length > 0;

  let totalCart = 0;

  cart.map((item) => (totalCart += item.total));

  return (
    <Modal>
      <div className={classes.decoCart}></div>
      <div className={`${classes.decoCartMiddle} ${classes.decoCart}`}></div>
      <div> Your Cart </div>
      {hasCart &&
        cart.map((item) => (
          <ul key={item.id}>
            <ItemCart item={item} />
          </ul>
        ))}
      <span className={`${classes.amount} ${classes.btnCart}`}>
        {totalCart.toFixed(2)}
      </span>
      {!hasCart && (
        <Button className={classes.btnCart}>
          <Link to="/">Back</Link>
        </Button>
      )}
      {hasCart && (
        <Link to="/">
          <Button className={classes.btnCart}>Finish</Button>
        </Link>
      )}
    </Modal>
  );
};

export default Cart;
