/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    let min = 50;
    let max = 100;
    const idade = () => parseInt(Math.random()*(max - min) + min);
    const nerd = () => Math.random() > 0.5
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={function (e) {
          props.onClick("João", idade(), nerd());
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
