import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import ItemLitContainer from "./components/items/ItemListContainer";

import "./App.css";
import CartContextProvider from "./context/CartContext";
import AppContextProvider from "./context/AppContext";
import Cart from "./components/cart/Cart";
import HeroImage from "./components/UI/HeroImage";

function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar className="App-header" />
          <Routes>
            <Route path="/" element={<HeroImage />}/>
            <Route path="/ItemsList" element={<ItemLitContainer />} />
            <Route
              path="/ItemList/:categoryId"
              element={<ItemLitContainer />}
            />
            <Route
              path="/ItemDetail/:itemId"
              element={<ItemDetailContainer />}
            />
          <Route 
            path="/Cart"
            element={<Cart />}
          />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;

