export function StatusUser(props) {
  return (
    <section>
      {props.status ? "Usuário está online" : `Usuário está  offline `}
    </section>
  );
}
