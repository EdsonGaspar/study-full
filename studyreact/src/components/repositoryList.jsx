import { Counter } from "./couter";
import { RepositoryItems } from "./repositoryitems";
import "../styles/stylelistrepository.scss";
import { useEffect, useState } from "react";

//API, do github
//https://api.github.com/users/EdsonGaspar/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/EdsonGaspar/repos").then((response) =>
      response.json().then((data) => setRepositories(data))
    );
  }, []);

  return (
    <section className="list-repository">
      <h1>Lista de Repositorio</h1>
      <ul>
        {repositories.map((repositories) => {
          return (
            <RepositoryItems key={repositories} repository={repositories} />
          );
        })}
      </ul>
      {/* <Counter /> */}
    </section>
  );
}
