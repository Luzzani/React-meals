import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Item from "./Item";
import LoadingSpinner from "../UI/LoadingSpinner";

import "./ItemList.css";

const ItemList = () => {
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
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
        setData(data);
      })
  };

  const filter =(data, category)=> {
    const filter = data.filter(
      (item) => item.category === `${category}`
    );
    content = filter.map((item) => <Item key={item.id} item={item} />);
  }

  let content = data.map((item) => <Item key={item.id} item={item} />);

  switch (categoryId) {
    case "weomensCloth": {
      filter(data, `women's clothing`);
      break;
    }
    case "MensCloth": {
      filter(data, `men's clothing`);
      break;
    }
    case "Jewels": {
      filter(data, `jewelery`);
      break;
    }
    case "Electronics": {
      filter(data, `electronics`);
      break;
    }
    default:
      <LoadingSpinner />;
  }

  return (
    <div className="containerItem">
      {!isLoading && <LoadingSpinner />}
      {isLoading && content}
    </div>
  );
};

export default ItemList;
