import Aleatorio from "./num"
import Card from "./layout/Card"
import './App.css';
import Hello from "./helloworld"

function App() {
  return (
    <div className="App">
      <Hello />

      <div className="Cards">

        <Card titulo="Desafio Aleatorio" >
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="Titulos" >
          <h2>Titulo h2</h2>
          <h3>Titulo h3</h3>
        </Card>

        <Card titulo="Livros" >
          <ol>
            <li>Alice no pais das maravilhas</li>
            <li>Introduction to algorithms</li>
            <li>Clean code</li>
          </ol>
        </Card>

      </div>

    </div>
  );
}

export default App;
