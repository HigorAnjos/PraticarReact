import Aleatorio from "./num"
import Card from "./layout/Card"
import './App.css';
import Hello from "./helloworld"

function App() {
  return (
    <div className="App">
      <Hello />

      <Card titulo="Desafio Aleatorio" >
        <Aleatorio min={1} max={60} />
      </Card>


      <Card titulo="Titulos" >
        <h2>Titulo h2</h2>
        <h3>Titulo h3</h3>
      </Card>

    </div>
  );
}

export default App;
