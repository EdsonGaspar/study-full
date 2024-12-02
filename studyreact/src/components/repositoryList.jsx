import { RepositoryItems } from "./repositoryitems";

export function RepositoryList() {
  return (
    <section>
      <h2>Lista de Repositorio</h2>
      <ul>
        <RepositoryItems repository="Unform01" />
        <RepositoryItems />
        <RepositoryItems />
      </ul>
    </section>
  );
}
