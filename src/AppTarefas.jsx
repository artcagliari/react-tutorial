//AppTarefas.jsx
import { useState } from "react";
import TarefasLista from "./TarefasLista";
import TarefasForm from "./TarefasForm";

const AppTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  const addTarefa = (texto) => {
    const novaTarefa = {
      // Data porque ainda não há um gerenciador de IDs.
      id: Date.now(),
      texto,
    };

    setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa]);
  };

  const editTarefa = (id, novoTexto) => {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, texto: novoTexto } : tarefa,
      ),
    );
  };

  const deleteTarefa = (id) => {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== id),
    );
  };

  return (
    <div>
      <h1>💡Keepão React</h1>
      <TarefasForm onAddTarefa={addTarefa} />
      <TarefasLista
        tarefas={tarefas}
        onEditTarefa={editTarefa}
        onDeleteTarefa={deleteTarefa}
      />
    </div>
  );
};

export default AppTarefas;
