import { useState } from "react";
import Count from "../count/count";
import classes from "./ItemDetail.module.css";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  const [hideCount, sethideCount] =useState(false);

  const initial = 1;
  let stock = 5;

  const buyButtonHandler =()=>{
    sethideCount(true);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.productImg}>
        <img className={classes.imgDetail} src={`${props.img}`} alt={props.name} height="320" width="227" />
      </div>
      <div className={classes.productInfo}>
        <div className={classes.productText}>
          <h1 className={classes.titleDetail}>{props.name}</h1>
          <h2 className={classes.subTitleDetail}>{props.description}</h2>
        </div>
      </div>
      <div className={classes.productPriceBtn}>
        <p className={classes.priceDetail}>
          <span className={classes.spanDetail}>${props.price}</span>
        </p>

        {!hideCount && <Count className={classes.countDetial} initial={initial} stock={stock} onAdd={buyButtonHandler} id={props.id}/>}

        {hideCount && <Link to="/cart" className={classes.btnDetail}>checkout</Link>}
      </div>
    </div>
  );
};

export default ItemDetail;
