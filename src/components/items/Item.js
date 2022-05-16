import { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import "./Item.css";

const Item = (props) => {
  const { item } = props;

  return (
    <Fragment>
      <div className="itemBox">
        <h2 className="titleItem">{item.title}</h2>
        <img src={`${item.image}`} alt={props.title} height="80" width="80" />
        <h4 className="priceItem">{`$${item.price}`}</h4>
          <Link to={`/ItemDetail/${item.id}`} >
        <Button className="btnItem">
            Details
        </Button>
          </Link>
      </div>
    </Fragment>
  );
};

export default Item;
