import { NavBar } from "./components/navbar";
import { RepositoryList } from "./components/repositoryList";
import "./styles/global.scss";

function App() {
  return (
    <main>
      <NavBar />
      <RepositoryList />
    </main>
  );
}

export default App;
