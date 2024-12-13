import { useEffect, useState } from "react";
import "./App.css";
import { ListRepos } from "./components/listrepos";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/EdsonGaspar/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <main>
      <ul>
        {repositories.map((repository) => {
          return <ListRepos key={repository.name} repository={repository} />;
        })}
      </ul>
    </main>
  );
}

export default App;
