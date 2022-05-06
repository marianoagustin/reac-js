import './componentes/navBar.css'
import './App.css';
import NavBar from './componentes/navBar';
import Car from './componentes/carrito/CartWidget';

function App() {

console.log(`hola mundo`);

  return (
    <div className="App">
          <NavBar />
          <Car />
      <header className="App-header" >
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
