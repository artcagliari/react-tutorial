import { useState } from "react";

const TarefasForm = ({ onAddTarefa }) => {
  const [tarefa, setTarefa] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (tarefa.trim()) {
      onAddTarefa(tarefa.trim());
      setTarefa("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tarefa}
        onChange={(event) => setTarefa(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TarefasForm;
