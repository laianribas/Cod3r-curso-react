/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
//   const data = {
//     nome: "?",
//     idade: 0,
//     nerd: false,
//   };
    const [data, setData] = useState({
        nome: "?",
        idade: 0,
        nerd: false
    })
  function fornecerInformacoes(nomePai, idadePai, nerdPai) {
    console.log(nomePai, idadePai, nerdPai);
    setData(() => {
        return {
            nome: nomePai,
            idade: idadePai,
            nerd: nerdPai
        }
    })
  }
  return (
    <div>
      <div>
        <span>{data.nome} </span>
        <span>{data.idade} </span>
        <span>{data.nerd ? "Verdadeiro" : "falso"}!</span>
      </div>
      <IndiretaFilho onClick={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
