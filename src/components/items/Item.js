import { Fragment } from "react";
import { Link } from "react-router-dom";
import './Item.css'


const Item =(props)=>{
    const {item} = props;
    return <Fragment>
        <div className="itemBox">
        <h2 className="titleItem">{item.title}</h2>
        <h4 className="priceItem">{item.price}</h4>
        <Link to={`/ItemList/${item.id}`} className="btnItem">Details</Link>
        </div>
    </Fragment>
}

export default Item;