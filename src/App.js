import "./App.css";

import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import ItemLitContainer from "./components/items/ItemListContainer";
import Count from "./components/count/count";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const initial = 1;
  let stock = 5;

  return (
    <BrowserRouter>
        <NavBar className="App-header" />
      <Routes>
        <Route path="/" element={<Count initial={initial} stock={stock}/>}/>
        <Route path="/ItemList" element={<ItemLitContainer/>}></Route>
        <Route path='/ItemList/:itemId' element={<ItemDetailContainer/>}/>
        <Route></Route>s
       {/* <Count initial={initial} stock={stock}/> */}
       
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

