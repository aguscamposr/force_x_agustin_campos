import './App.css';
import ItemListContainer from './components/container';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer>
        <h1>Bienvenidos a FORCE X</h1>
      </ItemListContainer>
    </div>
  );
}

export default App;
