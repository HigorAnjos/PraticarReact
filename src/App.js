import Aleatorio from "./components/basicos/num"
import Card from "./components/basicos/Card"
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro.jsx";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import './App.css';
import Hello from "./helloworld"

function App() {
  return (
    <div className="App">
      <Hello />

      <div className="Cards">

        <Card titulo="#05 - Repeticao " color="#F7B32B">
          <ListaAlunos />
        </Card>

        <Card titulo="#04 - Componente com Filho'S " color="#F7B32B">
          <Familia sobrenome="Anjos">
            <FamiliaMembro nome="Higor" />
            <FamiliaMembro nome="Maria" />
            <FamiliaMembro nome="Laura" />
          </Familia>
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
