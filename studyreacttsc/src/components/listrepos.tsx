type RepospositoriesItemsProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
};

export function ListRepos(repo: RepospositoriesItemsProps) {
  return (
    <li>
      <strong>{repo.repository.name}</strong>
      <p>{repo.repository.description}</p>
      <a href={repo.repository.html_url}>Acessar repositorios</a>
    </li>
  );
}
