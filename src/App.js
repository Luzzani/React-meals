import "./App.css";

import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./components/items/ItemDetailContainer";


function App() {

  return (
    <div>
      <NavBar className="App-header" />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;

