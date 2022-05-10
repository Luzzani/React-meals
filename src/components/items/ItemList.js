import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Item from "./Item";
import LoadingSpinner from "../UI/LoadingSpinner";

import "./ItemList.css";

const ItemList = () => {
  const { categoryId } = useParams();
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
        setData(data);
      })
  };

  let content = data.map((item) => <Item key={item.id} item={item} />);

  switch (categoryId) {
    case "weomensCloth": {
      const filter = data.filter(
        (item) => item.category === `women's clothing`
      );
      content = filter.map((item) => <Item key={item.id} item={item} />);
      break;
    }
    case "MensCloth": {
      const filter = data.filter((item) => item.category === `men's clothing`);
      content = filter.map((item) => <Item key={item.id} item={item} />);
      break;
    }
    case "Jewels": {
      const filter = data.filter((item) => item.category === `jewelery`);
      content = filter.map((item) => <Item key={item.id} item={item} />);
      break;
    }
    case "Electronics": {
      const filter = data.filter((item) => item.category === `electronics`);
      content = filter.map((item) => <Item key={item.id} item={item} />);
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
