import React, {useState, useEffect} from "react";
import Item from "./Item";
import LoadingSpinner from "../UI/LoadingSpinner";
import './ItemList.css'

const ItemList =()=>{
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

    return <div className="containerItem">
        {!isLoading && <LoadingSpinner/>}
        {isLoading && data.map(item =><Item key={item.id} item={item}/>)}
        </div>

}

export default ItemList;