import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useCartContext } from "../context/CartContext";

import Button from "../UI/Button";
import classes from "./Count.module.css";

const Count = (props) => {
  const { initial, stock, onAdd, id } = props;

  const [count, setCount] = useState(initial);

  const { addToCart } = useCartContext();
  const { products } = useAppContext();

  const addCount = () => {
    let hasStock = stock - count;
    if (hasStock > 0) {
      setCount(count + 1);
    }
  };

  const lessCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const handlerClick =(id, quantity)=>{
    const findProduct = products.find((prod) => prod.id === id)

    if (!findProduct) {
      alert("Error en la base de datos")
    }
    const total = findProduct.price * quantity
    findProduct.total = total;
    addToCart(findProduct, quantity)
    onAdd(count)
  }

  return (
    <>
      <div className={props.className}>
        <button onClick={lessCount}>-</button>
        <strong>{count}</strong>
        <button onClick={addCount}>+</button>
      </div>
      <div>
        <Button className={classes.buyBtn} type="button" onEventClick={() => handlerClick(id, count)}>
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default Count;
