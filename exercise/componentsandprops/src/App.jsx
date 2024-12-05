import { StatusUser } from "./components/statususer";
import { Welcome } from "./components/welcome";
import "./styles/global.scss";
function App() {
  return (
    <main>
      <h1>Exercio sobre compontes e propriedades</h1>
      <Welcome nome="Edson Joao Gaspar" />
      <StatusUser status={false} />
    </main>
  );
}

export default App;
