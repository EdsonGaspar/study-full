import { Counter } from "./couter";
import { RepositoryItems } from "./repositoryitems";
import "../styles/stylelistrepository.scss";

export function RepositoryList() {
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
