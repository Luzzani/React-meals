import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import ItemLitContainer from "./components/items/ItemListContainer";

import "./App.css";
import CartContextProvider from "./components/context/CartContext";
import AppContextProvider from "./components/context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar className="App-header" />
          <Routes>
            <Route path="/" element={<ItemLitContainer />} />
            <Route
              path="/ItemList/:categoryId"
              element={<ItemLitContainer />}
            />
            <Route
              path="/ItemDetail/:itemId"
              element={<ItemDetailContainer />}
            />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
