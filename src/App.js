import "./App.css";
import ItemListContainer from "./components/items/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import ItemCount from "./components/counter/ItemCount";

const stock = 12;
const initial = 5;
 
function App() {

  return (
    <div>
      <NavBar className="App-header" />
      <ItemListContainer/>
      <ItemCount stock={stock} initial={initial} />
    </div>
  );
}

export default App;
