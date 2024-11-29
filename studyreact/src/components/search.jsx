export function Seach() {
  const person = {
    name: "Joao Gaspar",
    titleJob: "Desenvolvidor FrontEnd",
  };
  return (
    <div>
      <h2>Exibindo Objecto JSX</h2>
      <p>Nome: {person.name}</p>
      <p>Função: {person.titleJob}</p>
    </div>
  );
}
