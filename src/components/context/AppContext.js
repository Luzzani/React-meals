import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext();

export const useAppContext =()=> useContext(AppContext)



const AppContextProvider =(props)=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getData()
    }, [])

    const getData = () => {
        const URL = "https://fakestoreapi.com/products";
    
        fetch(URL)
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
          });
      };
   

    return <AppContext.Provider value={{products}}>{props.children}</AppContext.Provider>
}

export default AppContextProvider;