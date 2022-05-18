import { useCartContext } from "../../context/CartContext";

import classes from "./ItemCart.module.css";

const ItemCart = (props) => {
  const { cart, addToCart, deleteFromCart } = useCartContext();
  const { title, price, quantity, id } = props.item;

  const addItemHandler = (id, quantity) => {
    const findProduct = cart.find((prod) => prod.id === id);
    if (!findProduct) {
      alert("Error");
      return;
    }
    
    findProduct.total += findProduct.price;

    addToCart(findProduct, quantity);
  };

  const removeItemHandler = (product, quantity) => {
    const findProduct = cart.find((prod) => prod.id === product.id);

    if (!findProduct) {
      alert("Error");
    }
    findProduct.total -= findProduct.price;

    deleteFromCart(findProduct, quantity);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => removeItemHandler(props.item, 1)}>-</button>
        <button onClick={() => addItemHandler(id, 1)}>+</button>
      </div>
    </li>
  );
};

export default ItemCart;
