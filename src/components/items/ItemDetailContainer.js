import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import ItemDetail from "./ItemDetail";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const {itemId} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
    setIsLoading(false);
  }, []);
  
  
    const getData = () => {
      
      const URL = "https://fakestoreapi.com/products";
      
      fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const product = data.find(prod => prod.id === +itemId)
        setIsLoading(true);
        setData(product)
      });
    };

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
          />
      }
    </ul>
  );
};

export default ItemDetailContainer;