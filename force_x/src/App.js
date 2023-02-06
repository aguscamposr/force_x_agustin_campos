import './App.css';
import ItemListContainer from './components/container';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!!!"/>
    </div>
  );
}

export default App;
