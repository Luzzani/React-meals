import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider =(porps)=>{

    console.log('esto es cartcontext');
    console.log(porps);
    
    const [cart, setCart] = useState([]);

    const isInCart =(id)=> cart.find(prod => prod.id === id)

    const addToCart =(product, quant)=>{
        console.log('esto es en addToCart');
        console.log(product);
        const newCart = [...cart];
        console.log('el console de abajo es el cart');
        console.log(cart);
        console.log('el console de abajo es el newCart');
        console.log(newCart);
        
        
        const productIsInCart = isInCart(product.id)
        console.log('productIsInCart y product.id');
        console.log(productIsInCart);
        console.log(product.id);

        
        if (productIsInCart) {
            newCart[newCart.findIndex(prod => prod.id === productIsInCart.id)].quiantity += quant;
            
            setCart(newCart);
            console.log('esto es dentro de la validacion si el prod es repetido');
            console.log(cart);
            return;
        }
        
        product.quiantity = quant;
        
        setCart([...newCart, product])
        console.log('el console de abajo es el newCart despues de la validacion');
        console.log(newCart);
        console.log('el console de abajo es el cart despues de la validacion');
        console.log(cart);
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

    console.log('fin de cartcontext')
    console.log(cart)

    return <CartContext.Provider value={{
        cart,
        addToCart,
        deteleFromCart,
        setCart,
        deletCart
    }}>{porps.children}</CartContext.Provider>

}

export default CartContextProvider;