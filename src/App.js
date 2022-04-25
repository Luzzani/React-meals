import "./App.css";
import ItemCount from "./components/counter/ItemCount";
import ItemListContainer from "./components/items/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {
  const stock = 12;
  const initial = 5;

  return (
    <div>
      <NavBar className="App-header" />
      <ItemListContainer>
        <ItemCount stock={stock} initial={initial} />
      </ItemListContainer>
    </div>
  );
}

export default App;
