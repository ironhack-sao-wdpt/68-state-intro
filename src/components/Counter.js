import { useState } from "react";

function Counter() {
  // 1. Criar a variável contadora

  const [state, setState] = useState(0);

  // 2. Escutar o evento de clique nos botões

  // 3. Função para atualizar valor
  function handleDecrementClick(event) {
    // 4. Atualizar os valores
    // state--; // <-- Modificar (mutate) o state diretamente é PROIBIDO !!!!!!
    if (state > 0) {
      setState(state - 1);
    }
  }

  // 3. Função para atualizar valor
  function handleIncrementClick(event) {
    // 4. Atualizar os valores
    // state++; // <-- Modificar (mutate) o state diretamente é PROIBIDO !!!!!!
    setState(state + 1); // state++ é a mesma coisa que state = state + 1, portanto é uma modificação
  }

  console.log(state);

  return (
    <div className="counter">
      <button onClick={handleDecrementClick}>-</button>
      <span>Count: {state}</span>
      <button onClick={handleIncrementClick}>+</button>
    </div>
  );
}

export default Counter;
