import { useState } from "react";

import FormControl from "./FormControl";

function Form() {
  const [state, setState] = useState({
    name: "pedro",
    email: "",
    password: "",
    acceptTerms: false,
  });

  function handleChange(event) {
    // a função de atualização de state é destrutiva, ou seja, substitui o state anterior pelo novo completamente. Em objetos, se não quisermos perder as chaves do state anterior, precisamos criar um "backup"

    // const clone = { ...state };
    // clone[event.target.name] = event.target.value;

    // setState(clone);
    setState({ ...state, [event.target.name]: event.target.value });
  }

  console.log(state);

  return (
    <div>
      {/* Formulário de cadastro de usuário */}
      <h1>Novo usuário</h1>
      <form>
        {/* Nome */}

        <FormControl
          label="Seu nome:"
          id="cadastroUsuarioNome"
          // No atributo name, precisamos passar o nome da chave que armazena o valor deste input no objeto de state (ver linha 7)
          name="name"
          // Input controlado: um input que atualiza o state toda vez que seu valor interno é modificado (pelo usuário, ao digitar por exemplo)...
          onChange={handleChange}
          // ...e também que tem seu valor interno forçado a ser igual ao state atual
          value={state.name}
        />

        {/* E-mail */}

        <FormControl
          label="E-mail:"
          id="cadastroUsuarioEmail"
          type="email"
          name="email"
          onChange={handleChange}
          value={state.email}
        />

        {/* Senha */}

        <FormControl
          label="Senha: "
          id="cadastroUsuarioSenha"
          name="password"
          type="password"
          onChange={handleChange}
          value={state.password}
        />

        {/* Aceita os termos */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="cadastroUsuarioAceite"
            name="acceptTerms"
            // LEMBRETE: consertar o checkbox
            onChange={handleChange}
            value={state.acceptTerms}
          />
          <label htmlFor="cadastroUsuarioAceite" className="form-check-label">
            Estou de acordo com a política do site.
          </label>
        </div>

        {/* Para a entrega do formulário funcionar, obrigatoriamente o type do botão precisa ser 'submit' */}
        <button className="btn btn-primary" type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default Form;
