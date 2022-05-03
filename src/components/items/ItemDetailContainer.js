import { useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import ItemDetail from "./ItemDetail";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
    setIsLoading(false);
  }, []);
  
  const getData = () => {
    setIsLoading(true);
    const URL = "https://fakestoreapi.com/products";
    
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      
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
        data.map((product) => (
          <ItemDetail
            key={product.id}
            price={product.price}
            name={product.title}
            img={product.image}
            description={product.description}
          />
        ))}
    </ul>
  );
};

export default ItemDetailContainer;
