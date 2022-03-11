import { useState } from "react";

function List() {
  // 1. Definir os states
  const [tasks, setTasks] = useState(["pagar contas"]);
  const [newTask, setNewTask] = useState("");

  // 2. Escutar o evento de click no botão

  function handleClick() {
    // 4. Criar a nova li
    // Aqui estamos usando a sintaxe de espalhamento (spread operator) para tirar a referência da array original do clone. Dessa forma, podemos modificar o clone sem se preocupar com estar modificando a array do state.
    if (newTask.length > 0) {
      const clone = [...tasks];
      clone.push(newTask);

      // Depois de atualizarmos o clone, basta atualizarmos o state para ser substituído pelo clone
      setTasks(clone);

      // Limpar o texto do input
      setNewTask("");
    }
  }

  // 3. Escutar o evento de change do input (toda vez que o conteúdo da caixa de texto mudar)
  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function handleDeleteClick(task) {
    const clone = [...tasks];

    const index = tasks.findIndex(
      (currentElement) => currentElement.id === task
    );

    if (index > -1) {
      clone.splice(index, 1);

      setTasks(clone);
    }
  }

  return (
    <div>
      <ul>
        {tasks.map((currentTaskStr) => (
          <li>
            {currentTaskStr}
            <button onClick={() => handleDeleteClick(currentTaskStr)}>-</button>
          </li>
        ))}
      </ul>
      <input onChange={handleChange} value={newTask} />
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default List;
