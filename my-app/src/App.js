import './componentes/navBar.css'
import './App.css';
import NavBar from './componentes/navBar';
// import Car from './componentes/carrito/CartWidget';
import Titulo from './componentes/titulo/ItemListContainer';
import Formulario from './componentes/formulario/Formulario';

function App() {

  return (
    <div>
      <header className="App-header" >
          <NavBar />
        </header>
          <div>

            <Titulo Titulo='soy titulo de App' subtit='soy subtitulo de app' />
        
          </div>
        
        <Formulario/>
    
    </div>
    
  );
}

export default App;
