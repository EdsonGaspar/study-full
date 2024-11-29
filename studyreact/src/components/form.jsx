const Form = () => {
  const type = "range";
  return (
    <form>
      <div>
        <label htmlFor="event">Nome Evento</label>
        <input name="event" type="text" />
      </div>
      <div>
        <label htmlFor="data">Data Evento</label>
        <input name="date" type="date" />
      </div>
      <div>
        <p>Mostrando barra de processo</p>
        <label htmlFor="zoomLevel">Nível do processo</label>
        <input type={type} name="zoomLevel" />
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

// Parei em adicionando elemento props

export default Form;
