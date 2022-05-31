import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

import Modal from "../UI/Modal";
import ItemCart from "./ItemCart";

import classes from "./Cart.module.css";
import Button from "../UI/Button";
import FormCart from "./FormCart";

const Cart = () => {
  const [isFinish, setIsFinish] = useState(false);
  const { cart, deletCart } = useCartContext();

  const hasCart = cart.length > 0;

  let totalCart = 0;

  cart.map((item) => (totalCart += item.total));

  const finishBuyHandler = () => {
    setIsFinish(true);
  };
  const cleanBuyHandler = () => {
    deletCart();
  };
  return (
    <Modal>
      {!isFinish && (
        <>
          <div className={classes.decoCart}></div>
          <div
            className={`${classes.decoCartMiddle} ${classes.decoCart}`}
          ></div>
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
            <>
              <h2>The cart is empty</h2>
              <Button className={classes.btnCart}>
                <Link to="/">Back</Link>
              </Button>
            </>
          )}
          {hasCart && (
            <>
              <Button
                className={classes.btnCart}
                onEventClick={finishBuyHandler}
              >
                Finish
              </Button>
              <Button
                className={classes.btnCart}
                onEventClick={cleanBuyHandler}
              >
                Clean Cart
              </Button>
            </>
          )}
        </>
      )}
      {isFinish && <FormCart />}
    </Modal>
  );
};

export default Cart;
