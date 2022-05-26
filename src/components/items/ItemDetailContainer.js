import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import ItemDetail from "./ItemDetail";
import { useAppContext } from '../../context/AppContext'

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { products } = useAppContext()
  const {itemId} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});


  useEffect(() => {
    setIsLoading(false);
    const product = products.find(prod => prod.id === +itemId)
    setData(product)
    setIsLoading(true);
  }, [itemId, products]);
  
  
  return (
    <ul className="listItem">
      {!isLoading && (
        <div className="centerSpinner">
          <LoadingSpinner />
        </div>
      )}
      {isLoading &&
          <ItemDetail
            key={data.id}
            price={data.price}
            name={data.title}
            img={data.image}
            description={data.description}
            id={data.id}
          />
      }
    </ul>
  );
};

export default ItemDetailContainer;