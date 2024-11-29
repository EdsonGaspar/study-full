export function List() {
  const name = "Edson";
  const age = 26;
  const active = true;
  const titleJob = "Desenvolvedor Front-end";
  const skills = ["HTML", "CSS", "JavaScript", "ReactJs", "NextJs"];
  return (
    <section>
      <h2>Exibindo Variaveis JSX</h2>
      <ul>
        <li>Name: {name}</li>
        <li>Idade: {age}</li>
        <li>Status: {active ? "true" : "false"}</li>
        <li>Função: {active ? titleJob : "Há procura"}</li>
        <li>Habilidades: {skills.toString()}</li>
      </ul>
    </section>
  );
}
