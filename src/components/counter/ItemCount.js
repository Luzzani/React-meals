import { useState } from "react";

const ItemCount = (props) => {
  const { initial, stock } = props;

//   const [theStock, setTheStock] = useState(stock);
  const [count, setCount] = useState(initial);


  const addNum = () => {
    let haveStock = stock - count;
    if (haveStock > 0) {
      setCount(count + 1);
    }
  };

  const lessNum = () => {
      if (count > 0) {
          setCount(count - 1);
      }
  };

  return (
    <div>
      <button onClick={lessNum}>-</button>
      <span>{count}</span>
      <button onClick={addNum}>+</button>
    </div>
  );
};

export default ItemCount;
