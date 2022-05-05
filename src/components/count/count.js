import { useState } from "react";


const Count =(props)=>{
    const {initial, stock} = props;

    const [count, setCount] = useState(initial);

    const addCount =()=>{
        let hasStock = stock - count;
        if (hasStock > 0) {
            setCount(count + 1);
        }
    }

    const lessCount =()=>{
        if (count !== 0) {
            setCount(count - 1);
        }
    }

    return <>
        <div>Bienvenido</div>
        <div>Count</div>
        <button onClick={lessCount}>-</button>
        <strong>{count}</strong>
        <button onClick={addCount}>+</button>
    </>


}

export default Count;