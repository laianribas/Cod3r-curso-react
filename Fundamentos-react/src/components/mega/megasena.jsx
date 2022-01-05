import React, { useState } from "react";
import Button from "../Button/Button";
import "./mega.css";
const Megasena = (props) => {
  function megasena(range) {
    const numbers = Array(range)
      .fill(0)
      .reduce((nums) => {
        const newNumber = unique(1, 60, nums);
        return [...nums, newNumber];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numbers;
  }

  function unique(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min) + min);
    return array.includes(random) ? unique(min, max, array) : random;
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const initialNumbers = megasena(qtde);

  const [numbers, setNumbers] = useState(initialNumbers);
  return (
    <div className="Mega">
      <h2>Mega</h2>
      {/* <h3>{numbers.join("   ")}</h3> */}
      <ul>
        {numbers.map((numbers, i) => {
          return <li key={i}><h3>•{numbers}</h3></li>;
        })}
      </ul>
      <div>
        <label>Quantidade de números: </label>
        <input
          min={6}
          max={15}
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumbers(megasena(+e.target.value));
          }}
        />
      </div>
      <Button onClick={(_) => setNumbers(megasena(qtde))}>Gerar Números</Button>
    </div>
  );
};

export default Megasena;
