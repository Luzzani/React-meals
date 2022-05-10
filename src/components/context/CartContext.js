import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider =(porps)=>{
    
    const [cart, setCart] = useState([]);

    const isInCart =(id)=> cart.find(prod => prod.id === id)

    const addToCart =(product, quant)=>{
        const newCart = [...cart];
        
        const productIsInCart = isInCart(product.id)

        
        if (productIsInCart) {
            newCart[newCart.findIndex(prod => prod.id === productIsInCart.id)].quiantity += quant;
            
            setCart(newCart);
            return;
        }
        
        product.quiantity = quant;
        
        setCart([...newCart, product])
    }
    
    const deteleFromCart =(product)=> {
        const newCart = [...cart];
        
        const productIsInCart = isInCart(product.id);

        if (!productIsInCart) {
            return;
        }

        const deleteProdcut = newCart.filter((prod)=> prod.id !== product.id);

        setCart(deleteProdcut);
    }

    const deletCart =()=> setCart([]);

    return <CartContext.Provider value={{
        cart,
        addToCart,
        deteleFromCart,
        setCart,
        deletCart
    }}>{porps.children}</CartContext.Provider>

}

export default CartContextProvider;