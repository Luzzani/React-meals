import { useParams } from "react-router-dom";

import Item from "./Item";
import LoadingSpinner from "../UI/LoadingSpinner";

import "./ItemList.css";
import { useAppContext } from "../../context/AppContext";

const ItemList = () => {
  const { categoryId } = useParams();
  const { products } = useAppContext()

  const filter =(data, category)=> {
    const filter = data.filter(
      (item) => item.category === `${category}`
    );
    content = filter.map((item) => <Item key={item.id} item={item} />);
  }

  let content = products.map((item) => <Item key={item.id} item={item} />);

  switch (categoryId) {
    case "weomensCloth": {
      filter(products, `women's clothing`);
      break;
    }
    case "MensCloth": {
      filter(products, `men's clothing`);
      break;
    }
    case "Jewels": {
      filter(products, `jewelery`);
      break;
    }
    case "Electronics": {
      filter(products, `electronics`);
      break;
    }
    default:
      <LoadingSpinner />;
  }

  return (
    <div className="containerItem">
      {content}
    </div>
  );
};

export default ItemList;
