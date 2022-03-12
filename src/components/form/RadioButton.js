function RadioButton(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        checked={props.checked}
        value={props.value}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default RadioButton;
