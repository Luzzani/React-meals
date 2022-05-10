import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useCartContext } from "../context/CartContext";
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
        <button className={classes.buyBtn} type="button" onClick={() => handlerClick(id, count)}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Count;
