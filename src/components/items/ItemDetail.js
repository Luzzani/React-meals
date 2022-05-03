import "./ItemDetail.css";

const ItemDetail = (props) => {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={`${props.img}`} alt={props.name} height="320" width="227" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{props.name}</h1>
          <h2>{props.description}</h2>
        </div>
      </div>
      <div className="product-price-btn">
        <p>
          <span>{props.price}</span>$
        </p>
        <button type="button">buy now</button>
      </div>
    </div>
  );
};

export default ItemDetail;
