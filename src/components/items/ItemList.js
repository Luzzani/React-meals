import { useEffect, useState } from "react";
import './ItemList.css'

import Item from "./Item";

const mealsList = [
  {
    id: 1,
    meal: "chicken",
    price: 20,
  },
  {
    id: 2,
    meal: "sushi",
    price: 40,
  },
  {
    id: 3,
    meal: "meat",
    price: 30,
  },
];

const ItemList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const response = new Promise((resolve, reject) => {
      const rand = Math.random();

      setTimeout(() => {
        if (rand > 0.5) {
          resolve(mealsList);
        } else {
          reject("Something went wrong");
        }
      }, 5000);
    });

    response
      .then((result) => {
        setMeals(result);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return <ul className="listItem">
     { meals.map((meal) => (
        <Item key={meal.id} price={meal.price} meal={meal.meal} />
      ))}
  </ul> 
};

export default ItemList;
