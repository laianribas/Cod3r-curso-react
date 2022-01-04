import React from "react";

const PassoForm = (props) => {
  return (
    <div>
      <label htmlFor="passoInput">Passos: </label>
      <input
        id="passoInput"
        type="number"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default PassoForm;
