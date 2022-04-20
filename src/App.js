import './App.css';
import ItemListContainer from './components/items/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar className="App-header"/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
