import { useState } from "react";

const TarefasItem = ({ tarefa, onEditTarefa, onDeleteTarefa }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [novoTexto, setNovoTexto] = useState(tarefa.texto);

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    const texto = novoTexto.trim();

    if (texto) {
      onEditTarefa(tarefa.id, texto);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={novoTexto}
          onChange={(event) => setNovoTexto(event.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        tarefa.texto
      )}
      <button type="button" onClick={handleEdit} aria-label="Editar tarefa">
        📝
      </button>
      <button
        type="button"
        onClick={() => onDeleteTarefa(tarefa.id)}
        aria-label="Excluir tarefa"
      >
        🗑️
      </button>
    </li>
  );
};

export default TarefasItem;
