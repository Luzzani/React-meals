import { createContext, useContext, useEffect, useState } from "react"
import {collection, getDocs, getFirestore } from 'firebase/firestore'

const AppContext = createContext();

export const useAppContext =()=> useContext(AppContext)

const AppContextProvider =(props)=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getDataItems()
    }, [])

    const getDataItems = () => {
        const dataBase = getFirestore();

        const itemsCollection = collection(dataBase, 'items')

        getDocs( itemsCollection ).then(snapshot => {
          const itemsList = snapshot.docs.map( item => {
            return item.data()
          })
          setProducts(itemsList);
        })
        
      };
 
    return <AppContext.Provider value={{products}}>{props.children}</AppContext.Provider>
}

export default AppContextProvider;

