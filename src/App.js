import Aleatorio from "./layout/components/basicos/num"
import Card from "./layout/components/basicos/Card"
import Familia from "./layout/components/basicos/Familia";
import './App.css';
import Hello from "./helloworld"

function App() {
  return (
    <div className="App">
      <Hello />

      <div className="Cards">

        <Card titulo="#04 - Componente com Filhos " color="#F7B32B">
          <Familia sobrenome="Anjos" />
        </Card>

        <Card titulo="#03 - Desafio Aleatorio" color="#080">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#02 - Titulos" >
          <h2>Titulo h2</h2>
          <h3>Titulo h3</h3>
        </Card>

        <Card titulo="#01 - Livros" >
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
