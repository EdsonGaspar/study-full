import { Counter } from "./couter";
import { RepositoryItems } from "./repositoryitems";
import "../styles/stylelistrepository.scss";
import { useEffect, useState } from "react";

//https://api.github.com/users/EdsonGaspar/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/EdsonGaspar/repos").then((response) =>
      response.json().then((data) => setRepositories(data))
    );
  }, []);

  console.log(repositories);
  return (
    <section className="list-repository">
      <h1>Lista de Repositorio</h1>
      <ul>
        <RepositoryItems repository="Unform01" />
        <RepositoryItems repository="Unform02" />
        <RepositoryItems repository="Unform03" />
      </ul>
      <Counter />
    </section>
  );
}
