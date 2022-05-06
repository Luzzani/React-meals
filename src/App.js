import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import ItemLitContainer from "./components/items/ItemListContainer";
// import Count from "./components/count/count";

import "./App.css";

function App() {
  // const initial = 1;
  // let stock = 5;

  return (
    <BrowserRouter>
        <NavBar className="App-header" />
      <Routes>
        <Route path="/" element={<ItemLitContainer/>}/>
        <Route path="/ItemList/:categoryId" element={<ItemLitContainer/>}/>
        <Route path='/ItemDetail/:itemId' element={<ItemDetailContainer/>}/>
       {/* <Count initial={initial} stock={stock}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

