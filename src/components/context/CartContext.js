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
            newCart[newCart.findIndex(prod => prod.id === productIsInCart.id)].quantity += quant;
            
            setCart(newCart);
            return;
        }
        
        product.quantity = quant;
        
        setCart([...newCart, product])
    }
    
    const deleteFromCart =(product, quant)=> {
        const newCart = [...cart];
        
        const productIsInCart = isInCart(product.id);

        //const total = productIsInCart.price * productIsInCart.quant


        if (productIsInCart && (productIsInCart.quantity > 1)) {
            newCart[newCart.findIndex(prod => prod.id === productIsInCart.id)].quantity -= quant;
            //newCart[newCart.findIndex(prod => prod.id === productIsInCart.id)].total = total;
            setCart(newCart);
            return;
        }

        if (!productIsInCart) {
            return;
        }

        const deleteProdcut = newCart.filter((prod)=> prod.id !== product.id);

        setCart(deleteProdcut);
    }

    const deletCart =()=> setCart([]);

    console.log(cart);

    return <CartContext.Provider value={{
        cart,
        addToCart,
        deleteFromCart,
        setCart,
        deletCart
    }}>{porps.children}</CartContext.Provider>

}

export default CartContextProvider;


