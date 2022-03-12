import { useState } from "react";

import FormControl from "./FormControl";
import CheckboxControl from "./CheckboxControl";
import RadioButton from "./RadioButton";
import SelectControl from "./SelectControl";

const campi = [
  { value: 0, label: "Madrid" },
  { value: 1, label: "Barcelona" },
  { value: 2, label: "Miami" },
  { value: 3, label: "Paris" },
  { value: 4, label: "Berlim" },
  { value: 5, label: "Amsterdam" },
  { value: 6, label: "São Paulo" },
  { value: 7, label: "Cidade do México" },
];

function Form() {
  const [state, setState] = useState({
    name: "pedro",
    email: "",
    password: "",
    acceptTerms: false,
    bootcamp: "Web Dev",
    campus: 0,
  });

  function handleChange(event) {
    // a função de atualização de state é destrutiva, ou seja, substitui o state anterior pelo novo completamente. Em objetos, se não quisermos perder as chaves do state anterior, precisamos criar um "backup"

    // const clone = { ...state };
    // clone[event.target.name] = event.target.value;

    // setState(clone);
    setState({ ...state, [event.target.name]: event.target.value });
  }

  // Como não vamos acessar o value do input e sim o checked, precisamos de uma outra função que acessa a propriedade correta
  function handleCheckboxChange(event) {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  // Como não queremos "entregar" o formulário para o mesmo servidor que está nos servindo o HTML do React, precisamos impedir que o navegador tente entregar os dados do formulário no evento submit.
  function handleSubmit(event) {
    // Previne o navegador de recarregar a página e colocar os dados do form na URL
    event.preventDefault();

    if (state.acceptTerms) {
      // Aqui é onde aconteceria a comunucação com o servidor de dados em uma situação real
      console.log(state);
    } else {
      alert("Por favor aceite os termos e condições!");
    }
  }

  return (
    <div>
      {/* Formulário de cadastro de usuário */}
      <h1>Novo usuário</h1>
      <form onSubmit={handleSubmit}>
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
        <CheckboxControl
          label="Estou de acordo com a política do site."
          id="cadastroUsuarioAceite"
          name="acceptTerms"
          onChange={handleCheckboxChange}
          // Em checkboxes, a propriedade value não tem efeito, e o que controla seu estado interno é a propriedade checked, onde true significa que a checkbox está marcada
          checked={state.acceptTerms}
        />

        {/* Seleção do bootcamp */}
        <fieldset className="mb-3">
          <legend>Selecione o programa do bootcamp desejado:</legend>

          <RadioButton
            label="Web Dev"
            id="cadastroUsuarioBootcampWD"
            name="bootcamp"
            onChange={handleChange}
            value="Web Dev"
            checked={state.bootcamp === "Web Dev"}
          />

          <RadioButton
            label="UX/UI"
            id="cadastroUsuarioBootcampUX"
            name="bootcamp"
            onChange={handleChange}
            value="UX/UI"
            checked={state.bootcamp === "UX/UI"}
          />

          <RadioButton
            label="Data Analytics"
            id="cadastroUsuarioBootcampDA"
            name="bootcamp"
            onChange={handleChange}
            value="Data Analytics"
            checked={state.bootcamp === "Data Analytics"}
          />
        </fieldset>

        {/* Campus */}

        <SelectControl
          label="Selecione seu campus"
          id="cadastroUsuarioCampus"
          name="campus"
          onChange={handleChange}
          value={state.campus}
          // items={[
          //   { value: 0, label: "Madrid" },
          //   { value: 1, label: "Barcelona" },
          //   { value: 2, label: "Miami" },
          //   { value: 3, label: "Paris" },
          //   { value: 4, label: "Berlim" },
          //   { value: 5, label: "Amsterdam" },
          //   { value: 6, label: "São Paulo" },
          //   { value: 7, label: "Cidade do México" },
          // ]}
        >
          <option disabled value="0">
            Selecione abaixo...
          </option>
          {campi.map((currentOptionObj) => (
            <option key={currentOptionObj.value} value={currentOptionObj.value}>
              {currentOptionObj.label}
            </option>
          ))}
        </SelectControl>

        {/* Para a entrega do formulário funcionar, obrigatoriamente o type do botão precisa ser 'submit' */}
        <button className="btn btn-primary" type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default Form;
